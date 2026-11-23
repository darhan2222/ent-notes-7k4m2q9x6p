/* ============================================================
   ЕНТ · Информатика — логика интерфейса и тренажёров
   ============================================================ */

(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (e) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        /* localStorage может быть недоступен на file:// */
      }
    }
  };

  const topicNames = {
    hardware: "Железо",
    software: "ПО",
    networks: "Сети",
    equipment: "Оборудование",
    protocols: "Протоколы",
    addressing: "Адресация",
    security: "Безопасность",
    programming: "Программирование"
  };

  const topicClasses = {
    hardware: "accent",
    software: "violet",
    networks: "",
    equipment: "good",
    protocols: "a",
    addressing: "b",
    security: "warn",
    programming: "violet"
  };

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function shuffle(list) {
    const arr = list.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

  const toastEl = $("#toast");
  let toastTimer = null;
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
  }

  /* ------------------------------------------------------------
     Тема
     ------------------------------------------------------------ */

  const themeToggle = $("#themeToggle");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeToggle) {
      themeToggle.textContent = theme === "dark" ? "☀" : "☾";
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Включить светлую тему" : "Включить тёмную тему"
      );
    }
  }

  applyTheme(document.documentElement.getAttribute("data-theme") || "dark");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next =
        document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      store.set("ent-theme", next);
    });
  }

  /* ------------------------------------------------------------
     Навигация и прогресс
     ------------------------------------------------------------ */

  const sections = $$(".section");
  const nav = $("#nav");
  const main = $("#main");
  const sidebar = $("#sidebar");
  const overlay = $("#sidebarOverlay");
  const menuToggle = $("#menuToggle");

  if (nav) {
    sections.forEach((section, index) => {
      const link = document.createElement("a");
      link.className = "nav-item";
      link.href = "#" + section.id;
      link.dataset.navFor = section.id;
      link.innerHTML =
        '<span class="nav-num">' +
        esc(section.dataset.num || String(index).padStart(2, "0")) +
        '</span><span class="nav-label">' +
        esc(section.dataset.nav || section.id) +
        '</span><span class="nav-check" aria-hidden="true">✓</span>';
      nav.appendChild(link);

      if (section.id === "start") {
        const sep = document.createElement("div");
        sep.className = "nav-sep";
        nav.appendChild(sep);
      }
    });
  }

  const navItems = $$(".nav-item");

  function setSection(id, push) {
    const target = document.getElementById(id) || sections[0];
    if (!target) return;

    sections.forEach((section) => {
      section.classList.toggle("active", section === target);
    });

    navItems.forEach((item) => {
      const active = item.dataset.navFor === target.id;
      item.classList.toggle("active", active);
      if (active) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });

    window.scrollTo({ top: 0, behavior: "auto" });
    closeSidebar();

    if (push && window.location.hash !== "#" + target.id) {
      history.pushState(null, "", "#" + target.id);
    }
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute("href").slice(1);
    if (!document.getElementById(id)) return;
    event.preventDefault();
    setSection(id, true);
  });

  window.addEventListener("popstate", () => {
    setSection(window.location.hash.slice(1) || "start", false);
  });

  const markableSections = sections.filter((section) => section.dataset.markable === "true");
  const progressFill = $("#progressFill");
  const progressValue = $("#progressValue");
  const progressHint = $("#progressHint");

  function getMarks() {
    const value = store.get("ent-progress", []);
    return new Set(Array.isArray(value) ? value : []);
  }

  function renderProgress() {
    const marks = getMarks();
    const total = markableSections.length;
    const done = markableSections.filter((section) => marks.has(section.id)).length;
    const percent = total ? Math.round((done / total) * 100) : 0;

    if (progressFill) progressFill.style.width = percent + "%";
    if (progressValue) progressValue.textContent = percent + "%";
    if (progressHint) {
      progressHint.textContent =
        done === total && total > 0
          ? "Все учебные разделы отмечены. Переходи к практике!"
          : done + " из " + total + " разделов отмечено. Прогресс сохраняется.";
    }

    sections.forEach((section) => {
      const btn = $('.mark-btn[data-mark="' + section.id + '"]');
      if (!btn) return;
      const isDone = marks.has(section.id);
      btn.classList.toggle("done", isDone);
      btn.textContent = isDone ? "✓ Изучено" : "Отметить изученным";
      btn.setAttribute("aria-pressed", String(isDone));
    });

    navItems.forEach((item) => {
      item.classList.toggle("done", marks.has(item.dataset.navFor));
    });
  }

  document.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-mark]");
    if (!btn) return;
    const id = btn.dataset.mark;
    const marks = getMarks();
    if (marks.has(id)) {
      marks.delete(id);
      showToast("Отметка снята");
    } else {
      marks.add(id);
      showToast("Раздел отмечен как изученный");
    }
    store.set("ent-progress", Array.from(marks));
    renderProgress();
  });

  renderProgress();

  /* ------------------------------------------------------------
     Мобильная навигация
     ------------------------------------------------------------ */

  function openSidebar() {
    if (!sidebar) return;
    sidebar.classList.add("open");
    if (overlay) overlay.classList.add("show");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
  }

  function closeSidebar() {
    if (!sidebar) return;
    sidebar.classList.remove("open");
    if (overlay) overlay.classList.remove("show");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      if (sidebar.classList.contains("open")) closeSidebar();
      else openSidebar();
    });
  }
  if (overlay) overlay.addEventListener("click", closeSidebar);

  /* ------------------------------------------------------------
     Поиск
     ------------------------------------------------------------ */

  const searchInput = $("#searchInput");
  const searchResults = $("#searchResults");
  let searchIndex = [];
  let searchTimer = null;

  function buildSearchIndex() {
    searchIndex = [];
    const seen = new Set();
    const nodes = $$(
      ".main h2, .main h3, .main h4, .main p, .main li, .main td, .main th, .main .def, .main .callout, .main .video-body h4",
      main || document
    );

    nodes.forEach((el) => {
      if (el.closest(".search-results")) return;
      if (el.closest(".q-card")) return;
      const text = (el.textContent || "").replace(/\s+/g, " ").trim();
      if (text.length < 6) return;
      const section = el.closest(".section");
      if (!section) return;
      const key = section.id + "|" + text;
      if (seen.has(key)) return;
      seen.add(key);

      const id = "sidx-" + searchIndex.length;
      el.dataset.searchId = id;
      searchIndex.push({
        el,
        low: text.toLowerCase(),
        text,
        section: section.id,
        sectionName: section.dataset.nav || section.id,
        id
      });
    });
  }

  function closeSearch() {
    if (!searchResults) return;
    searchResults.classList.remove("open");
    searchResults.innerHTML = "";
  }

  function makeSnippet(text, terms) {
    const low = text.toLowerCase();
    let pos = -1;
    for (const term of terms) {
      pos = low.indexOf(term);
      if (pos !== -1) break;
    }
    if (pos < 0) pos = 0;
    const start = Math.max(0, pos - 45);
    const end = Math.min(text.length, pos + 95);
    let snippet = (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
    snippet = esc(snippet);
    terms.forEach((term) => {
      if (!term) return;
      const re = new RegExp("(" + escapeRegExp(term) + ")", "gi");
      snippet = snippet.replace(re, "<mark>$1</mark>");
    });
    return snippet;
  }

  function runSearch(rawQuery) {
    if (!searchResults || !searchInput) return;
    const query = rawQuery.trim();
    if (query.length < 2) {
      closeSearch();
      return;
    }

    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    const hits = searchIndex
      .filter((item) => terms.every((term) => item.low.includes(term)))
      .slice(0, 12);

    if (!hits.length) {
      searchResults.innerHTML = '<div class="search-empty">Ничего не найдено. Попробуй другой термин.</div>';
      searchResults.classList.add("open");
      return;
    }

    searchResults.innerHTML = hits
      .map(
        (hit) =>
          '<button class="search-result" type="button" data-goto-section="' +
          esc(hit.section) +
          '" data-goto-id="' +
          esc(hit.id) +
          '"><span class="sr-section">' +
          esc(hit.sectionName) +
          '</span><span class="sr-text">' +
          makeSnippet(hit.text, terms) +
          "</span></button>"
      )
      .join("");
    searchResults.classList.add("open");
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      clearTimeout(searchTimer);
      const value = searchInput.value;
      searchTimer = setTimeout(() => runSearch(value), 110);
    });

    searchInput.addEventListener("focus", () => {
      if (searchInput.value.trim().length >= 2) runSearch(searchInput.value);
    });

    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeSearch();
        searchInput.blur();
      }
      if (event.key === "Enter") {
        const first = searchResults && searchResults.querySelector(".search-result");
        if (first) first.click();
      }
    });
  }

  if (searchResults) {
    searchResults.addEventListener("click", (event) => {
      const result = event.target.closest("[data-goto-section]");
      if (!result) return;
      const sectionId = result.dataset.gotoSection;
      const id = result.dataset.gotoId;
      setSection(sectionId, true);
      closeSearch();

      setTimeout(() => {
        const target = document.querySelector('[data-search-id="' + id + '"]');
        if (!target) return;
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.classList.add("flash-target");
        setTimeout(() => target.classList.remove("flash-target"), 1900);
      }, 60);
    });
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-wrap")) closeSearch();
  });

  /* ------------------------------------------------------------
     Сортировка карточек
     ------------------------------------------------------------ */

  function initSorter(root) {
    const pool = root.querySelector("[data-pool]");
    const zones = $$(".sort-zone", root);
    const items = $$(".sort-item", root);
    const checkBtn = root.querySelector("[data-check]");
    const resetBtn = root.querySelector("[data-reset]");
    const resultEl = root.querySelector(".sorter-result");
    if (!pool || !items.length) return;

    const originalOrder = items.slice();
    let selected = null;

    function clearResult() {
      if (resultEl) {
        resultEl.textContent = "";
        resultEl.style.color = "";
      }
    }

    function clearSelection() {
      if (selected) selected.classList.remove("selected");
      selected = null;
      zones.forEach((zone) => zone.classList.remove("drop-ready"));
    }

    function selectItem(item) {
      if (selected === item) {
        clearSelection();
        return;
      }
      clearSelection();
      selected = item;
      item.classList.add("selected");
      zones.forEach((zone) => zone.classList.add("drop-ready"));
    }

    function place(item, container) {
      if (!item || !container) return;
      container.appendChild(item);
      item.classList.remove("selected", "correct", "wrong");
      clearSelection();
      clearResult();
    }

    items.forEach((item) => {
      item.addEventListener("click", () => {
        if (item.classList.contains("correct") || item.classList.contains("wrong")) {
          item.classList.remove("correct", "wrong");
        }
        selectItem(item);
      });

      item.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", String(originalOrder.indexOf(item)));
        event.dataTransfer.effectAllowed = "move";
        item.classList.add("dragging");
      });

      item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
        zones.forEach((zone) => zone.classList.remove("drop-ready"));
      });
    });

    function dropInto(event, container) {
      event.preventDefault();
      const index = Number(event.dataTransfer.getData("text/plain"));
      const item = originalOrder[index];
      if (item) place(item, container);
    }

    zones.forEach((zone) => {
      const container = zone.querySelector(".zone-items") || zone;

      zone.addEventListener("click", (event) => {
        if (event.target.closest(".sort-item")) return;
        if (selected) place(selected, container);
      });

      zone.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        zone.classList.add("drop-ready");
      });

      zone.addEventListener("dragleave", (event) => {
        if (!zone.contains(event.relatedTarget)) zone.classList.remove("drop-ready");
      });

      zone.addEventListener("drop", (event) => {
        zone.classList.remove("drop-ready");
        dropInto(event, container);
      });
    });

    pool.addEventListener("click", (event) => {
      if (event.target === pool && selected) place(selected, pool);
    });
    pool.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    });
    pool.addEventListener("drop", (event) => dropInto(event, pool));

    if (checkBtn) {
      checkBtn.addEventListener("click", () => {
        let correct = 0;
        let placed = 0;

        items.forEach((item) => {
          const zone = item.closest(".sort-zone");
          item.classList.remove("correct", "wrong");
          if (!zone) return;
          placed++;
          const isCorrect = zone.dataset.zone === item.dataset.answer;
          item.classList.add(isCorrect ? "correct" : "wrong");
          if (isCorrect) correct++;
        });

        if (!resultEl) return;
        if (correct === items.length) {
          resultEl.textContent = "Отлично! Все " + items.length + " элементов на месте.";
          resultEl.style.color = "var(--good)";
        } else if (placed < items.length) {
          resultEl.textContent =
            "Разложено " + placed + " из " + items.length + ". Верно: " + correct + ".";
          resultEl.style.color = "var(--warn)";
        } else {
          resultEl.textContent = "Верно: " + correct + " из " + items.length + ". Перечитай красные.";
          resultEl.style.color = "var(--bad)";
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        clearSelection();
        clearResult();
        items.forEach((item) => {
          item.classList.remove("correct", "wrong", "selected", "dragging");
          pool.appendChild(item);
        });
        originalOrder.forEach((item) => pool.appendChild(item));
      });
    }
  }

  $$("[data-sorter]").forEach(initSorter);

  /* ------------------------------------------------------------
     Шины: демонстрация чтения
     ------------------------------------------------------------ */

  const busDemo = $("[data-bus]");
  if (busDemo) {
    const lines = {
      addr: busDemo.querySelector('[data-bus-line="addr"]'),
      control: busDemo.querySelector('[data-bus-line="control"]'),
      data: busDemo.querySelector('[data-bus-line="data"]')
    };
    const busLog = busDemo.querySelector("[data-bus-log]");
    const runBtn = busDemo.querySelector("[data-bus-run]");
    const resetBtn = busDemo.querySelector("[data-bus-reset]");
    let busTimers = [];

    function busReset() {
      busTimers.forEach(clearTimeout);
      busTimers = [];
      Object.values(lines).forEach((line) => line && line.classList.remove("active"));
      if (busLog) busLog.textContent = "Нажми кнопку — увидишь порядок сигналов при чтении.";
      if (runBtn) runBtn.disabled = false;
    }

    if (resetBtn) resetBtn.addEventListener("click", busReset);

    if (runBtn && busLog) {
      runBtn.addEventListener("click", () => {
        busReset();
        runBtn.disabled = true;
        busLog.textContent = "";

        const steps = [
          {
            line: "addr",
            text: "1. Address Bus → адрес ячейки памяти (например, 0x1A)."
          },
          {
            line: "control",
            text: "2. Control Bus → сигнал READ: «прочитать данные»."
          },
          {
            line: "data",
            text: "3. Data Bus ← данные из ячейки возвращаются в процессор."
          },
          {
            line: null,
            text: "Готово: процессор получил значение. Шины работают вместе."
          }
        ];

        steps.forEach((step, index) => {
          busTimers.push(
            setTimeout(() => {
              if (step.line) {
                Object.values(lines).forEach((line) => line && line.classList.remove("active"));
                const line = lines[step.line];
                if (line) line.classList.add("active");
              } else {
                Object.values(lines).forEach((line) => line && line.classList.remove("active"));
              }
              busLog.textContent += (busLog.textContent ? "\n" : "") + step.text;
              busLog.scrollTop = busLog.scrollHeight;
              if (index === steps.length - 1) runBtn.disabled = false;
            }, index * 950)
          );
        });
      });
    }
  }

  /* ------------------------------------------------------------
     CIA-карточки
     ------------------------------------------------------------ */

  $$("[data-cia-card]").forEach((card) => {
    card.addEventListener("click", () => {
      const isOpen = card.classList.toggle("open");
      card.setAttribute("aria-expanded", String(isOpen));
      const toggle = card.querySelector(".cia-toggle");
      if (toggle) toggle.textContent = isOpen ? "Скрыть детали −" : "Показать детали +";
    });
  });

  /* ------------------------------------------------------------
     Топологии
     ------------------------------------------------------------ */

  const topologyData = {
    bus: {
      name: "Шина · Bus",
      desc: "Все устройства подключены к одному общему кабелю. Данные распространяются по общей среде.",
      pros: "Просто и дёшево, минимум кабеля.",
      cons: "Повреждение магистрали может нарушить всю сеть; общая среда и коллизии.",
      nodes: [
        { x: 100, y: 160, label: "PC1" },
        { x: 220, y: 160, label: "PC2" },
        { x: 340, y: 160, label: "PC3" },
        { x: 460, y: 160, label: "PC4" },
        { x: 560, y: 160, label: "PC5" }
      ],
      edges: [[0, 1], [1, 2], [2, 3], [3, 4]]
    },
    star: {
      name: "Звезда · Star",
      desc: "Все устройства подключены к центральному устройству, обычно коммутатору.",
      pros: "Легко добавлять устройства и находить неисправный кабель. Отказ одного кабеля не отключает остальных.",
      cons: "Отказ центрального коммутатора может нарушить работу всей звезды.",
      nodes: [
        { x: 300, y: 160, label: "SW", center: true },
        { x: 300, y: 40, label: "PC1" },
        { x: 414, y: 123, label: "PC2" },
        { x: 370, y: 257, label: "PC3" },
        { x: 230, y: 257, label: "PC4" },
        { x: 186, y: 123, label: "PC5" }
      ],
      edges: [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]]
    },
    ring: {
      name: "Кольцо · Ring",
      desc: "Каждое устройство соединено с двумя соседними, образуя замкнутое кольцо.",
      pros: "Детерминированный порядок передачи, отсутствие центрального узла.",
      cons: "В классической однонаправленной схеме разрыв одного соединения может нарушить работу сети.",
      nodes: [
        { x: 300, y: 40, label: "PC1" },
        { x: 410, y: 103, label: "PC2" },
        { x: 410, y: 217, label: "PC3" },
        { x: 300, y: 280, label: "PC4" },
        { x: 190, y: 217, label: "PC5" },
        { x: 190, y: 103, label: "PC6" }
      ],
      edges: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]]
    },
    tree: {
      name: "Дерево · Tree",
      desc: "Иерархическая структура из нескольких соединённых звёзд. Удобна для больших сетей.",
      pros: "Масштабируется, есть уровни подключения, легко расширять ветви.",
      cons: "Отказ верхнего узла может затронуть целые ветви.",
      nodes: [
        { x: 300, y: 42, label: "R", center: true },
        { x: 180, y: 130, label: "SW1" },
        { x: 420, y: 130, label: "SW2" },
        { x: 100, y: 240, label: "PC1" },
        { x: 240, y: 240, label: "PC2" },
        { x: 360, y: 240, label: "PC3" },
        { x: 500, y: 240, label: "PC4" }
      ],
      edges: [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]]
    },
    mesh: {
      name: "Ячеистая · Mesh",
      desc: "Устройства имеют несколько соединений друг с другом, образуя множество путей.",
      pros: "Высокая отказоустойчивость: есть альтернативные пути передачи.",
      cons: "Требует большего количества соединений и сложнее в настройке.",
      nodes: [
        { x: 300, y: 40, label: "A" },
        { x: 455, y: 110, label: "B" },
        { x: 420, y: 250, label: "C" },
        { x: 180, y: 250, label: "D" },
        { x: 145, y: 110, label: "E" }
      ],
      edges: [[0, 1], [0, 2], [0, 3], [0, 4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
    },
    hybrid: {
      name: "Гибридная · Hybrid",
      desc: "Комбинация нескольких топологий. Например, две звезды объединены общей магистралью.",
      pros: "Можно подобрать структуру под здание и нагрузку.",
      cons: "Сложнее проектирование и диагностика.",
      nodes: [
        { x: 180, y: 70, label: "SW1", center: true },
        { x: 420, y: 70, label: "SW2", center: true },
        { x: 90, y: 170, label: "PC1" },
        { x: 200, y: 190, label: "PC2" },
        { x: 270, y: 120, label: "PC3" },
        { x: 330, y: 120, label: "PC4" },
        { x: 400, y: 190, label: "PC5" },
        { x: 510, y: 170, label: "PC6" }
      ],
      edges: [[0, 1], [0, 2], [0, 3], [0, 4], [1, 4], [1, 5], [1, 6], [1, 7], [0, 5]]
    }
  };

  const topoCanvas = $("#topoCanvas");
  const topoInfo = $("#topoInfo");
  const topoTabs = $("#topoTabs");

  function renderTopology(key) {
    const data = topologyData[key];
    if (!data || !topoCanvas || !topoInfo) return;

    const edges = data.edges
      .map(([a, b]) => {
        const n1 = data.nodes[a];
        const n2 = data.nodes[b];
        return (
          '<line class="topo-edge" x1="' +
          n1.x +
          '" y1="' +
          n1.y +
          '" x2="' +
          n2.x +
          '" y2="' +
          n2.y +
          '"></line>'
        );
      })
      .join("");

    const nodes = data.nodes
      .map((node) => {
        const radius = node.center ? 25 : 20;
        return (
          '<g class="topo-node' +
          (node.center ? " center" : "") +
          '"><circle cx="' +
          node.x +
          '" cy="' +
          node.y +
          '" r="' +
          radius +
          '"></circle><text x="' +
          node.x +
          '" y="' +
          (node.y + 3.5) +
          '">' +
          esc(node.label) +
          "</text></g>"
        );
      })
      .join("");

    topoCanvas.innerHTML =
      '<svg viewBox="0 0 600 320" role="img" aria-label="Схема топологии ' +
      esc(data.name) +
      '">' +
      edges +
      nodes +
      "</svg>";

    topoInfo.innerHTML =
      "<h3>" +
      esc(data.name) +
      "</h3><p>" +
      esc(data.desc) +
      '</p><div class="topo-meta"><span><b>Плюсы:</b> ' +
      esc(data.pros) +
      "</span><span><b>Минусы:</b> " +
      esc(data.cons) +
      "</span></div>";
  }

  if (topoTabs) {
    topoTabs.addEventListener("click", (event) => {
      const tab = event.target.closest("[data-topo]");
      if (!tab) return;
      $$(".topo-tab", topoTabs).forEach((item) => item.classList.toggle("active", item === tab));
      renderTopology(tab.dataset.topo);
    });
    renderTopology("bus");
  }

  /* ------------------------------------------------------------
     Симулятор Hub vs Switch
     ------------------------------------------------------------ */

  const sim = $("[data-sim-mode]") ? $("[data-sim-mode]").closest(".card") : null;
  if (sim) {
    const modeButtons = $$("[data-mode]", sim);
    const sendBtn = $("[data-sim-send]", sim);
    const resetBtn = $("[data-sim-reset]", sim);
    const logEl = $("[data-sim-log]", sim);
    const svg = sim.querySelector(".sim-stage svg");
    const deviceName = $("#simDeviceName");
    const deviceSub = $("#simDeviceSub");
    const link1 = $("#simLink1");
    const link2 = $("#simLink2");
    const link3 = $("#simLink3");

    let mode = "hub";
    let running = false;
    let token = 0;

    function setSimMode(next) {
      mode = next;
      modeButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.mode === next));
      if (deviceName) deviceName.textContent = next === "hub" ? "HUB" : "SWITCH";
      if (deviceSub) {
        deviceSub.textContent = next === "hub" ? "L1 · рассылает всем" : "L2 · пересылает по MAC";
      }
    }

    function clearLog() {
      if (logEl) logEl.innerHTML = "";
    }

    function addLog(text, cls) {
      if (!logEl) return;
      const line = document.createElement("div");
      line.textContent = text;
      if (cls) line.className = "l-" + cls;
      logEl.appendChild(line);
      logEl.scrollTop = logEl.scrollHeight;
    }

    function clearLinks() {
      [link1, link2, link3].forEach((link) => link && link.classList.remove("active"));
      if (svg) $$(".sim-packet", svg).forEach((packet) => packet.remove());
    }

    function simReset() {
      token++;
      running = false;
      clearLinks();
      clearLog();
      addLog("Выбери устройство и нажми «Отправить кадр».", "muted");
      if (sendBtn) sendBtn.disabled = false;
      setSimMode(mode);
    }

    function animatePacket(points, duration, currentToken) {
      return new Promise((resolve) => {
        if (!svg) {
          resolve();
          return;
        }
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("r", "6");
        circle.setAttribute("class", "sim-packet");
        circle.setAttribute("opacity", "0");
        svg.appendChild(circle);

        const segments = [];
        let total = 0;
        for (let i = 0; i < points.length - 1; i++) {
          const dist = Math.hypot(points[i + 1][0] - points[i][0], points[i + 1][1] - points[i][1]);
          segments.push(dist);
          total += dist;
        }

        const start = performance.now();

        function frame(now) {
          if (currentToken !== token) {
            circle.remove();
            resolve();
            return;
          }
          const raw = Math.min(1, (now - start) / duration);
          const eased = raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2;
          let distance = eased * total;
          let seg = 0;
          while (seg < segments.length - 1 && distance > segments[seg]) {
            distance -= segments[seg];
            seg++;
          }
          const p0 = points[seg];
          const p1 = points[seg + 1] || p0;
          const local = segments[seg] ? Math.min(1, distance / segments[seg]) : 0;
          circle.setAttribute("cx", String(p0[0] + (p1[0] - p0[0]) * local));
          circle.setAttribute("cy", String(p0[1] + (p1[1] - p0[1]) * local));
          circle.setAttribute("opacity", "1");

          if (raw < 1) requestAnimationFrame(frame);
          else {
            circle.remove();
            resolve();
          }
        }

        requestAnimationFrame(frame);
      });
    }

    async function sendFrame() {
      if (running) return;
      running = true;
      token++;
      const currentToken = token;
      clearLinks();
      clearLog();
      if (sendBtn) sendBtn.disabled = true;

      addLog("PC1 → " + (mode === "hub" ? "Hub" : "Switch") + ": кадр для PC2 (MAC BB:02).", "accent");
      if (link1) link1.classList.add("active");
      await animatePacket([[150, 170], [380, 170]], 750, currentToken);
      if (link1) link1.classList.remove("active");
      if (currentToken !== token) return;

      if (mode === "hub") {
        addLog("Hub: не анализирую MAC — повторяю сигнал на все порты.", "warn");
        if (link2) link2.classList.add("active");
        if (link3) link3.classList.add("active");
        await Promise.all([
          animatePacket([[380, 170], [650, 92]], 800, currentToken),
          animatePacket([[380, 170], [650, 248]], 800, currentToken)
        ]);
        if (link2) link2.classList.remove("active");
        if (link3) link3.classList.remove("active");
        if (currentToken !== token) return;

        addLog("PC2: кадр принят.", "accent");
        addLog("PC3: получил чужой кадр → отбросил.", "warn");
        addLog("Все порты — в общем домене коллизий.", "muted");
      } else {
        addLog("Switch: изучил MAC AA:01 на порту 1.", "accent");
        addLog("В MAC-таблице: BB:02 → порт 2.", "muted");
        addLog("Пересылаю кадр только на порт PC2.", "accent");
        if (link2) link2.classList.add("active");
        await animatePacket([[380, 170], [650, 92]], 800, currentToken);
        if (link2) link2.classList.remove("active");
        if (currentToken !== token) return;

        addLog("PC2: кадр принят.", "accent");
        addLog("PC3: кадр не получил.", "muted");
        addLog("У каждого порта отдельный домен коллизий.", "muted");
      }

      if (sendBtn) sendBtn.disabled = false;
      running = false;
    }

    modeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (running) simReset();
        setSimMode(btn.dataset.mode);
        clearLinks();
        clearLog();
        addLog(
          btn.dataset.mode === "hub"
            ? "Режим Hub: сигнал идёт на все порты, MAC не анализируется."
            : "Режим Switch: кадр пойдёт только на нужный порт по MAC.",
          "muted"
        );
      });
    });

    if (sendBtn) sendBtn.addEventListener("click", sendFrame);
    if (resetBtn) resetBtn.addEventListener("click", simReset);

    setSimMode("hub");
  }

  /* ------------------------------------------------------------
     OSI
     ------------------------------------------------------------ */

  const osiLayers = [
    {
      n: 7,
      name: "Application",
      ru: "Прикладной",
      func: "Обеспечивает сетевые услуги приложениям: браузеру, почтовому клиенту, FTP-клиенту.",
      protocols: ["HTTP", "HTTPS", "DNS", "FTP", "SMTP", "IMAP"],
      devices: ["Браузер", "Веб-сервер", "Почтовый клиент"],
      pdu: "Data · данные",
      example: "Ты открываешь сайт — браузер формирует HTTP-запрос."
    },
    {
      n: 6,
      name: "Presentation",
      ru: "Представления",
      func: "Отвечает за представление данных: форматы, кодирование, сжатие, шифрование.",
      protocols: ["TLS", "UTF-8", "JPEG", "MP3"],
      devices: ["Кодеки", "Библиотеки шифрования"],
      pdu: "Data · данные",
      example: "HTTPS шифрует данные перед передачей."
    },
    {
      n: 5,
      name: "Session",
      ru: "Сеансовый",
      func: "Организует, поддерживает и завершает сеансы взаимодействия между приложениями.",
      protocols: ["Сессии приложений", "RPC"],
      devices: ["Клиент и сервер приложения"],
      pdu: "Data · данные",
      example: "Веб-сессия с авторизацией пользователя."
    },
    {
      n: 4,
      name: "Transport",
      ru: "Транспортный",
      func: "Обеспечивает передачу данных между приложениями, использует порты и управляет доставкой.",
      protocols: ["TCP", "UDP"],
      devices: ["Порты", "Сокеты"],
      pdu: "Segment / Datagram",
      example: "TCP нумерует сегменты и подтверждает получение."
    },
    {
      n: 3,
      name: "Network",
      ru: "Сетевой",
      func: "Обеспечивает логическую адресацию и маршрутизацию между разными сетями.",
      protocols: ["IP", "ICMP", "NAT"],
      devices: ["Router"],
      pdu: "Packet · пакет",
      example: "Маршрутизатор выбирает путь по IP-адресу."
    },
    {
      n: 2,
      name: "Data Link",
      ru: "Канальный",
      func: "Передаёт кадры между непосредственно связанными узлами, использует MAC-адреса.",
      protocols: ["Ethernet", "MAC", "Wi-Fi (L2)"],
      devices: ["Switch", "Bridge", "NIC"],
      pdu: "Frame · кадр",
      example: "Коммутатор пересылает Ethernet-кадр на нужный порт."
    },
    {
      n: 1,
      name: "Physical",
      ru: "Физический",
      func: "Передаёт биты в виде физических сигналов: электрических, оптических или радиосигналов.",
      protocols: ["Сигналы", "Разъёмы", "Кодирование линии"],
      devices: ["Hub", "Repeater", "Кабель"],
      pdu: "Bits · биты",
      example: "Сетевая карта отправляет электрические импульсы в кабель."
    }
  ];

  const osiStack = $("#osiStack");
  const osiDetail = $("#osiDetail");

  function renderOsiDetail(n) {
    const layer = osiLayers.find((item) => item.n === n);
    if (!layer || !osiDetail) return;

    const protocolChips = layer.protocols
      .map((item) => '<span class="chip">' + esc(item) + "</span>")
      .join("");
    const deviceChips = layer.devices
      .map((item) => '<span class="chip">' + esc(item) + "</span>")
      .join("");

    osiDetail.innerHTML =
      '<div class="osi-big">' +
      layer.n +
      "</div><h3>" +
      esc(layer.name) +
      " · " +
      esc(layer.ru) +
      '</h3><p class="small muted">' +
      esc(layer.func) +
      '</p><div class="osi-pdu">Единица данных: <b>' +
      esc(layer.pdu) +
      '</b></div><div class="osi-block"><span class="label">Протоколы и технологии</span><div class="chips">' +
      protocolChips +
      '</div></div><div class="osi-block"><span class="label">Устройства и компоненты</span><div class="chips">' +
      deviceChips +
      '</div></div><div class="osi-block"><span class="label">Пример</span><p>' +
      esc(layer.example) +
      "</p></div>";
  }

  if (osiStack) {
    osiStack.innerHTML = osiLayers
      .map(
        (layer) =>
          '<button class="osi-layer" type="button" role="tab" data-layer="' +
          layer.n +
          '" aria-selected="false"><span class="osi-n">' +
          layer.n +
          '</span><span class="osi-name">' +
          esc(layer.name) +
          '</span><span class="osi-ru">' +
          esc(layer.ru) +
          "</span></button>"
      )
      .join("");

    osiStack.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-layer]");
      if (!btn) return;
      const n = Number(btn.dataset.layer);
      $$(".osi-layer", osiStack).forEach((item) => {
        const active = item === btn;
        item.classList.toggle("active", active);
        item.setAttribute("aria-selected", String(active));
      });
      renderOsiDetail(n);
    });

    const first = osiStack.querySelector('[data-layer="7"]');
    if (first) first.classList.add("active");
    renderOsiDetail(7);
  }

  const encapFlow = $("[data-encap-flow]");
  if (encapFlow) {
    const steps = $$(".encap-step", encapFlow);
    const status = $("[data-encap-status]");
    const playBtn = $("[data-encap-play]");
    const reverseBtn = $("[data-encap-reverse]");
    const resetBtn = $("[data-encap-reset]");
    let encapTimers = [];

    const encapTexts = [
      "Application: сформированы данные приложения.",
      "Transport: добавлен заголовок TCP или UDP — получился сегмент или датаграмма.",
      "Network: добавлен IP-заголовок — получился пакет.",
      "Data Link: добавлены заголовок и трейлер Ethernet — получился кадр.",
      "Physical: кадр превращён в биты и передан сигналами по среде."
    ];

    function encapReset() {
      encapTimers.forEach(clearTimeout);
      encapTimers = [];
      steps.forEach((step) => step.classList.remove("active"));
      if (status) status.textContent = "Нажми кнопку, чтобы увидеть путь данных по уровням.";
    }

    function runEncap(reverse) {
      encapReset();
      const order = reverse ? [4, 3, 2, 1, 0] : [0, 1, 2, 3, 4];
      order.forEach((stepIndex, i) => {
        encapTimers.push(
          setTimeout(() => {
            steps.forEach((step) => step.classList.remove("active"));
            if (steps[stepIndex]) steps[stepIndex].classList.add("active");
            if (status) {
              status.textContent =
                (reverse ? "Декапсуляция. " : "Инкапсуляция. ") + encapTexts[stepIndex];
            }
            if (i === order.length - 1) {
              setTimeout(() => {
                if (status) {
                  status.textContent = reverse
                    ? "Готово: данные дошли до приложения."
                    : "Готово: данные превратились в биты и ушли в среду.";
                }
              }, 550);
            }
          }, i * 900)
        );
      });
    }

    if (playBtn) playBtn.addEventListener("click", () => runEncap(false));
    if (reverseBtn) reverseBtn.addEventListener("click", () => runEncap(true));
    if (resetBtn) resetBtn.addEventListener("click", encapReset);
  }

  /* ------------------------------------------------------------
     Калькулятор подсетей
     ------------------------------------------------------------ */

  const calcIp = $("#calcIp");
  const calcPrefix = $("#calcPrefix");
  const calcBtn = $("#calcBtn");
  const calcError = $("#calcError");
  const calcResults = $("#calcResults");
  const calcBits = $("#calcBits");
  const calcExplain = $("#calcExplain");

  function ipToInt(ip) {
    const parts = ip.trim().split(".");
    if (parts.length !== 4) return null;
    let result = 0;
    for (const part of parts) {
      if (!/^\d{1,3}$/.test(part)) return null;
      const value = Number(part);
      if (value < 0 || value > 255) return null;
      result = result * 256 + value;
    }
    return result >>> 0;
  }

  function intToIp(value) {
    return [
      (value >>> 24) & 255,
      (value >>> 16) & 255,
      (value >>> 8) & 255,
      value & 255
    ].join(".");
  }

  function formatNum(value) {
    return Number(value).toLocaleString("ru-RU");
  }

  function calcSubnet() {
    if (!calcIp || !calcPrefix || !calcResults) return;

    const ipValue = ipToInt(calcIp.value);
    const prefix = Number(calcPrefix.value);

    if (calcError) calcError.textContent = "";
    if (ipValue === null) {
      if (calcError) calcError.textContent = "Ошибка: IP-адрес должен состоять из четырёх чисел 0–255.";
      calcResults.innerHTML = "";
      if (calcBits) calcBits.innerHTML = "";
      return;
    }
    if (!Number.isInteger(prefix) || prefix < 0 || prefix > 32) {
      if (calcError) calcError.textContent = "Ошибка: префикс должен быть целым числом от 0 до 32.";
      calcResults.innerHTML = "";
      if (calcBits) calcBits.innerHTML = "";
      return;
    }

    const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
    const network = (ipValue & mask) >>> 0;
    const broadcast = (network | (~mask >>> 0)) >>> 0;
    const total = Math.pow(2, 32 - prefix);
    const usable = prefix === 32 ? 1 : prefix === 31 ? 2 : Math.max(0, total - 2);
    const first = prefix >= 31 ? network : network + 1;
    const last = prefix === 32 ? network : prefix === 31 ? broadcast : broadcast - 1;
    const wildcard = (~mask >>> 0) >>> 0;

    const rows = [
      ["Маска подсети", intToIp(mask), true],
      ["Адрес сети", intToIp(network), true],
      ["Broadcast", intToIp(broadcast), false],
      ["Первый узел", intToIp(first), false],
      ["Последний узел", intToIp(last), false],
      ["Всего адресов", formatNum(total), false],
      ["Доступно узлов", formatNum(usable), true],
      ["Wildcard", intToIp(wildcard), false]
    ];

    calcResults.innerHTML = rows
      .map(
        ([label, value, highlight]) =>
          '<div class="calc-result' +
          (highlight ? " highlight" : "") +
          '"><span class="cr-label">' +
          esc(label) +
          '</span><span class="cr-value">' +
          esc(value) +
          "</span></div>"
      )
      .join("");

    const binary = ipValue.toString(2).padStart(32, "0");
    let bitsHtml = "";
    for (let octet = 0; octet < 4; octet++) {
      let group = '<span class="bit-octet">';
      for (let bit = 0; bit < 8; bit++) {
        const index = octet * 8 + bit;
        group +=
          '<span class="bit ' +
          (index < prefix ? "net" : "host") +
          '">' +
          binary[index] +
          "</span>";
      }
      group += "</span>";
      bitsHtml += group;
    }
    if (calcBits) calcBits.innerHTML = bitsHtml;

    if (calcExplain) {
      let note = "";
      if (prefix === 32) note = "Префикс /32 — один адрес, обычно адрес конкретного интерфейса.";
      else if (prefix === 31) note = "Префикс /31 — два адреса, используется для point-to-point соединений.";
      else note = "Два адреса зарезервированы: адрес сети и broadcast.";
      calcExplain.innerHTML =
        "Количество адресов = 2<sup>(32 − " +
        prefix +
        ")</sup> = " +
        formatNum(total) +
        ". " +
        note;
    }
  }

  if (calcBtn) {
    calcBtn.addEventListener("click", calcSubnet);
  }
  [calcIp, calcPrefix].forEach((input) => {
    if (input) {
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") calcSubnet();
      });
    }
  });

  $$("[data-preset]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.preset || "";
      const parts = value.split("/");
      if (calcIp && parts[0]) calcIp.value = parts[0];
      if (calcPrefix && parts[1]) calcPrefix.value = parts[1];
      calcSubnet();
    });
  });

  if (calcIp && calcPrefix) calcSubnet();

  /* ------------------------------------------------------------
     Сопоставление протоколов
     ------------------------------------------------------------ */

  const matcher = $("[data-matcher]");
  if (matcher) {
    const leftCol = $("[data-match-left]", matcher);
    const rightCol = $("[data-match-right]", matcher);
    const statusEl = $("[data-match-status]", matcher);
    const resetBtn = $("[data-match-reset]", matcher);
    const leftItems = $$(".match-item", leftCol);
    const totalPairs = leftItems.length;
    let selectedLeft = null;
    let matched = 0;
    let wrongTimer = null;

    function updateStatus() {
      if (!statusEl) return;
      statusEl.textContent =
        matched === totalPairs
          ? "Готово! Все " + totalPairs + " пар верны. Можно закрепить материал в квизе."
          : "Соединено " + matched + " из " + totalPairs + ".";
      statusEl.style.color = matched === totalPairs ? "var(--good)" : "";
    }

    function selectLeft(btn) {
      if (btn.classList.contains("correct")) return;
      leftItems.forEach((item) => item.classList.toggle("selected", item === btn));
      selectedLeft = btn;
    }

    leftItems.forEach((btn) => {
      btn.addEventListener("click", () => selectLeft(btn));
    });

    $$(".match-item", rightCol).forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("correct") || btn.classList.contains("wrong")) return;
        if (!selectedLeft) {
          if (statusEl) {
            statusEl.textContent = "Сначала выбери протокол слева.";
            statusEl.style.color = "var(--warn)";
          }
          return;
        }

        if (selectedLeft.dataset.key === btn.dataset.key) {
          selectedLeft.classList.remove("selected");
          selectedLeft.classList.add("correct");
          btn.classList.add("correct");
          matched++;
          if (statusEl) statusEl.style.color = "";
          selectedLeft = null;
          updateStatus();
        } else {
          btn.classList.add("wrong", "disabled");
          if (statusEl) {
            statusEl.textContent = "Не та пара. Попробуй другое назначение.";
            statusEl.style.color = "var(--bad)";
          }
          clearTimeout(wrongTimer);
          wrongTimer = setTimeout(() => {
            btn.classList.remove("wrong", "disabled");
          }, 650);
        }
      });
    });

    function resetMatcher() {
      matched = 0;
      selectedLeft = null;
      clearTimeout(wrongTimer);
      $$(".match-item", matcher).forEach((item) => {
        item.classList.remove("selected", "correct", "wrong", "disabled");
      });
      const shuffled = shuffle($$(".match-item", rightCol));
      shuffled.forEach((btn) => rightCol.appendChild(btn));
      updateStatus();
    }

    if (resetBtn) resetBtn.addEventListener("click", resetMatcher);

    const initialRight = $$(".match-item", rightCol);
    shuffle(initialRight).forEach((btn) => rightCol.appendChild(btn));
    updateStatus();
  }

  /* ------------------------------------------------------------
     Квиз
     ------------------------------------------------------------ */

  const quizRoot = $("[data-quiz]");
  const quizStage = $("#quizStage");
  const quizResult = $("#quizResult");
  const quizProgress = $("#quizProgress");
  const quizBar = $("#quizBar");
  const quizFilters = $("#quizFilters");
  const bestScoreEl = $("#bestScore");
  const quizData = (window.ENT_DATA && window.ENT_DATA.quiz) || [];

  const quizState = {
    topic: "all",
    pool: [],
    index: 0,
    selected: [],
    checked: false,
    correct: 0,
    answers: []
  };

  function updateBestScore() {
    if (!bestScoreEl) return;
    const bests = store.get("ent-quiz-best", {});
    const best = bests && typeof bests === "object" ? bests[quizState.topic] : 0;
    bestScoreEl.textContent =
      "Лучший результат: " + (best ? best + "%" : "—");
  }

  function updateQuizProgress() {
    const total = quizState.pool.length;
    if (!total) {
      if (quizProgress) quizProgress.textContent = "0 / 0";
      if (quizBar) quizBar.style.width = "0%";
      return;
    }
    if (quizProgress) quizProgress.textContent = quizState.index + 1 + " / " + total;
    if (quizBar) quizBar.style.width = ((quizState.index + 1) / total) * 100 + "%";
  }

  function answerIsCorrect(question) {
    const correct = question.correct.slice().sort((a, b) => a - b);
    const chosen = quizState.selected.slice().sort((a, b) => a - b);
    return correct.length === chosen.length && correct.every((value, i) => value === chosen[i]);
  }

  function checkAnswer() {
    const question = quizState.pool[quizState.index];
    if (!question || quizState.checked || !quizState.selected.length) return;

    quizState.checked = true;
    const isCorrect = answerIsCorrect(question);
    if (isCorrect) quizState.correct++;
    quizState.answers.push({ topic: question.topic, correct: isCorrect });

    $$(".q-option", quizStage).forEach((option, index) => {
      option.disabled = true;
      option.classList.remove("selected");
      if (question.correct.includes(index)) option.classList.add("correct");
      else if (quizState.selected.includes(index)) option.classList.add("wrong");
    });

    const chosenText = quizState.selected
      .slice()
      .sort((a, b) => a - b)
      .map((index) => question.options[index])
      .join(", ");
    const correctText = question.correct
      .slice()
      .sort((a, b) => a - b)
      .map((index) => question.options[index])
      .join(", ");

    const feedback = $("#qFeedback");
    if (feedback) {
      feedback.className = "q-feedback show " + (isCorrect ? "ok" : "no");
      feedback.innerHTML =
        "<b>" +
        (isCorrect ? "Верно!" : "Не совсем.") +
        "</b>" +
        esc(question.explain) +
        (!isCorrect
          ? '<br><span class="small muted">Правильный ответ: ' + esc(correctText) + ".</span>"
          : "") +
        '<br><span class="small muted">Твой выбор: ' + esc(chosenText) + ".</span>";
    }

    const checkBtn = $("#qCheck");
    if (checkBtn) {
      checkBtn.textContent = "Далее →";
      checkBtn.disabled = false;
    }
    updateQuizProgress();
  }

  function nextQuestion() {
    quizState.index++;
    if (quizState.index >= quizState.pool.length) {
      showQuizResult();
    } else {
      renderQuestion();
    }
  }

  function renderQuestion() {
    const question = quizState.pool[quizState.index];
    if (!question || !quizStage) return;

    quizState.selected = [];
    quizState.checked = false;

    const letters = "ABCDEFGHIJ";
    const typeHint =
      question.type === "multi"
        ? "Выбери все правильные варианты."
        : question.type === "tf"
          ? "Определи, верно утверждение или нет."
          : "Выбери один правильный ответ.";

    const optionsHtml = question.options
      .map(
        (option, index) =>
          '<button class="q-option" type="button" data-option="' +
          index +
          '"><span class="q-letter">' +
          letters[index] +
          "</span><span>" +
          esc(option) +
          "</span></button>"
      )
      .join("");

    quizStage.innerHTML =
      '<div class="q-card">' +
      '<div class="q-meta"><span class="badge ' +
      (topicClasses[question.topic] || "") +
      '">' +
      esc(topicNames[question.topic] || question.topic) +
      '</span><span class="badge ' +
      question.level.toLowerCase() +
      '">Уровень ' +
      question.level +
      "</span>" +
      (question.type === "multi" ? '<span class="badge warn">Несколько ответов</span>' : "") +
      (question.wording ? '<span class="badge b">Академическая формулировка</span>' : "") +
      "</div>" +
      '<div class="q-text">' +
      esc(question.q) +
      '</div><div class="q-sub">' +
      typeHint +
      '</div><div class="q-options">' +
      optionsHtml +
      '</div><div class="q-actions"><button class="btn primary" id="qCheck" disabled>Проверить</button><span class="q-hint">' +
      (question.type === "multi" ? "Можно выбрать несколько." : "Один ответ.") +
      '</span></div><div class="q-feedback" id="qFeedback" aria-live="polite"></div></div>';

    updateQuizProgress();

    const optionButtons = $$(".q-option", quizStage);
    optionButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (quizState.checked) return;
        const index = Number(btn.dataset.option);
        if (question.type === "multi") {
          const pos = quizState.selected.indexOf(index);
          if (pos === -1) quizState.selected.push(index);
          else quizState.selected.splice(pos, 1);
        } else {
          quizState.selected = [index];
        }

        optionButtons.forEach((item) => {
          item.classList.toggle(
            "selected",
            quizState.selected.includes(Number(item.dataset.option))
          );
        });

        const checkBtn = $("#qCheck");
        if (checkBtn) checkBtn.disabled = quizState.selected.length === 0;
      });
    });

    const checkBtn = $("#qCheck");
    if (checkBtn) {
      checkBtn.addEventListener("click", () => {
        if (quizState.checked) nextQuestion();
        else checkAnswer();
      });
    }
  }

  function showQuizResult() {
    if (!quizResult || !quizStage) return;
    quizStage.innerHTML = "";
    quizStage.style.display = "none";
    quizResult.classList.add("show");

    const total = quizState.answers.length;
    const percent = total ? Math.round((quizState.correct / total) * 100) : 0;
    const ring = $("#scoreRing");
    const scoreText = $("#scoreText");
    const title = $("#resultTitle");
    const sub = $("#resultSub");
    const breakdown = $("#resultBreakdown");

    if (ring) ring.style.setProperty("--p", percent);
    if (scoreText) scoreText.textContent = percent + "%";

    if (title) {
      title.textContent =
        percent >= 90
          ? "Отлично! Тема закрыта."
          : percent >= 70
            ? "Хорошо. Есть небольшие пробелы."
            : percent >= 50
              ? "База есть, но нужно повторить."
              : "Пока тяжело — вернись к разделам.";
    }
    if (sub) {
      sub.textContent =
        "Правильно " + quizState.correct + " из " + total + " вопросов.";
    }

    const byTopic = {};
    quizState.answers.forEach((answer) => {
      if (!byTopic[answer.topic]) byTopic[answer.topic] = { correct: 0, total: 0 };
      byTopic[answer.topic].total++;
      if (answer.correct) byTopic[answer.topic].correct++;
    });

    if (breakdown) {
      breakdown.innerHTML = Object.keys(byTopic)
        .map((topic) => {
          const stat = byTopic[topic];
          return (
            '<div class="rb"><span>' +
            esc(topicNames[topic] || topic) +
            "</span><b>" +
            stat.correct +
            " / " +
            stat.total +
            "</b></div>"
          );
        })
        .join("");
    }

    const bests = store.get("ent-quiz-best", {});
    const previous = bests && typeof bests === "object" ? bests[quizState.topic] || 0 : 0;
    if (percent > previous) {
      const updated = Object.assign({}, bests || {});
      updated[quizState.topic] = percent;
      store.set("ent-quiz-best", updated);
    }
    updateBestScore();

    if (quizProgress) quizProgress.textContent = total + " / " + total;
    if (quizBar) quizBar.style.width = "100%";
  }

  function startQuiz(topic) {
    quizState.topic = topic || "all";
    quizState.pool = shuffle(
      quizState.topic === "all"
        ? quizData
        : quizState.topic === "wording"
          ? quizData.filter((question) => question.wording === true)
          : quizData.filter((question) => question.topic === quizState.topic)
    );
    quizState.index = 0;
    quizState.selected = [];
    quizState.checked = false;
    quizState.correct = 0;
    quizState.answers = [];

    if (!quizState.pool.length) {
      if (quizStage) {
        quizStage.style.display = "block";
        quizStage.innerHTML =
          '<div class="q-card"><p class="muted">Для этой темы пока нет вопросов.</p></div>';
      }
      return;
    }

    if (quizResult) quizResult.classList.remove("show");
    if (quizStage) quizStage.style.display = "block";
    updateBestScore();
    renderQuestion();
  }

  if (quizFilters) {
    quizFilters.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-topic]");
      if (!btn) return;
      $$(".qf", quizFilters).forEach((item) => item.classList.toggle("active", item === btn));
      startQuiz(btn.dataset.topic);
      if (quizRoot) quizRoot.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const quizRestart = $("#quizRestart");
  if (quizRestart) {
    quizRestart.addEventListener("click", () => startQuiz(quizState.topic));
  }

  const quizGoWeak = $("#quizGoWeak");
  if (quizGoWeak) {
    quizGoWeak.addEventListener("click", () => {
      const byTopic = {};
      quizState.answers.forEach((answer) => {
        if (!byTopic[answer.topic]) byTopic[answer.topic] = { correct: 0, total: 0 };
        byTopic[answer.topic].total++;
        if (answer.correct) byTopic[answer.topic].correct++;
      });
      let weakest = null;
      let weakestPercent = 101;
      Object.keys(byTopic).forEach((topic) => {
        const stat = byTopic[topic];
        const percent = (stat.correct / stat.total) * 100;
        if (percent < weakestPercent) {
          weakestPercent = percent;
          weakest = topic;
        }
      });
      const target = weakest && weakestPercent < 100 ? weakest : "all";
      if (quizFilters) {
        $$(".qf", quizFilters).forEach((item) => {
          item.classList.toggle("active", item.dataset.topic === target);
        });
      }
      startQuiz(target);
      if (quizRoot) quizRoot.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (quizData.length) {
    startQuiz("all");
  }

  /* ------------------------------------------------------------
     Флеш-карточки
     ------------------------------------------------------------ */

  const flashcard = $("#flashcard");
  const flashData = (window.ENT_DATA && window.ENT_DATA.flashcards) || [];
  const flashCountBadge = $("#flashCountBadge");
  if (flashCountBadge && flashData.length) {
    flashCountBadge.textContent = flashData.length + " терминов";
  }
  if (flashcard && flashData.length) {
    const flashFront = $("#flashFront");
    const flashBack = $("#flashBack");
    const flashTag = $("#flashTag");
    const flashCounter = $("#flashCounter");
    const flashKnownEl = $("#flashKnown");
    const flashRepeatEl = $("#flashRepeat");
    const prevBtn = $("#flashPrev");
    const nextBtn = $("#flashNext");
    const flipBtn = $("#flashFlip");
    const shuffleBtn = $("#flashShuffle");
    const knowBtn = $("#flashKnow");
    const repeatBtn = $("#flashRepeatAction");

    let order = flashData.map((_, index) => index);
    let cursor = 0;
    let flipped = false;
    const known = new Set();
    const repeat = new Set();

    function renderFlash() {
      const card = flashData[order[cursor]];
      if (!card) return;
      flashcard.classList.remove("flipped");
      flipped = false;
      if (flashFront) flashFront.textContent = card.term;
      if (flashBack) flashBack.textContent = card.def;
      if (flashTag) flashTag.textContent = topicNames[card.topic] || "Термин";
      if (flashCounter) flashCounter.textContent = cursor + 1 + " / " + order.length;
      if (flashKnownEl) flashKnownEl.textContent = known.size;
      if (flashRepeatEl) flashRepeatEl.textContent = repeat.size;
    }

    function flip() {
      flipped = !flipped;
      flashcard.classList.toggle("flipped", flipped);
    }

    function step(delta) {
      cursor = (cursor + delta + order.length) % order.length;
      renderFlash();
    }

    flashcard.addEventListener("click", flip);
    flashcard.addEventListener("keydown", (event) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        flip();
      }
    });

    if (prevBtn) prevBtn.addEventListener("click", () => step(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => step(1));
    if (flipBtn) flipBtn.addEventListener("click", flip);

    if (shuffleBtn) {
      shuffleBtn.addEventListener("click", () => {
        order = shuffle(order);
        cursor = 0;
        known.clear();
        repeat.clear();
        renderFlash();
      });
    }

    if (knowBtn) {
      knowBtn.addEventListener("click", () => {
        const term = flashData[order[cursor]].term;
        known.add(term);
        repeat.delete(term);
        renderFlash();
        if (known.size + repeat.size < order.length) step(1);
      });
    }

    if (repeatBtn) {
      repeatBtn.addEventListener("click", () => {
        const term = flashData[order[cursor]].term;
        repeat.add(term);
        known.delete(term);
        renderFlash();
        step(1);
      });
    }

    renderFlash();
  }

  /* ------------------------------------------------------------
     Тренажёр академических формулировок
     ------------------------------------------------------------ */

  const wordingRoot = $("[data-wording]");
  const wordingData = (window.ENT_DATA && window.ENT_DATA.wording) || [];
  if (wordingRoot && wordingData.length) {
    const wStage = $("#wordingStage");
    const wFilters = $("#wordingFilters");
    const wProgress = $("#wordingProgress");
    const wBar = $("#wordingBar");
    const wBest = $("#wordingBest");
    const wRestart = $("#wordingRestart");
    const letters = "ABCDEFGHIJ";
    const state = { topic: "all", pool: [], index: 0, answered: false, correct: 0, wrong: [] };

    function bests() {
      const value = store.get("ent-wording-best", {});
      return value && typeof value === "object" ? value : {};
    }

    function renderBest() {
      if (!wBest) return;
      const best = bests()[state.topic] || 0;
      wBest.textContent = "Лучший результат: " + (best ? best + "%" : "—");
    }

    function updateProgress() {
      const total = state.pool.length;
      if (!total) return;
      const current = Math.min(state.index + 1, total);
      if (wProgress) wProgress.textContent = current + " / " + total;
      if (wBar) wBar.style.width = (current / total) * 100 + "%";
    }

    function startWording(topic) {
      state.topic = topic || "all";
      state.pool = shuffle(
        state.topic === "all"
          ? wordingData
          : wordingData.filter((item) => item.topic === state.topic)
      );
      state.index = 0;
      state.answered = false;
      state.correct = 0;
      state.wrong = [];
      renderBest();

      if (!state.pool.length) {
        if (wStage) {
          wStage.innerHTML =
            '<div class="q-card"><p class="muted">Для этой темы пока нет формулировок.</p></div>';
        }
        if (wProgress) wProgress.textContent = "0 / 0";
        if (wBar) wBar.style.width = "0%";
        return;
      }
      renderWording();
    }

    function renderWording() {
      const item = state.pool[state.index];
      if (!item || !wStage) return;
      state.answered = false;

      const optionsHtml = item.options
        .map(
          (option, index) =>
            '<button class="q-option" type="button" data-w-option="' +
            index +
            '"><span class="q-letter">' +
            letters[index] +
            "</span><span>" +
            esc(option) +
            "</span></button>"
        )
        .join("");

      wStage.innerHTML =
        '<div class="q-card">' +
        '<div class="q-meta"><span class="badge ' +
        (topicClasses[item.topic] || "") +
        '">' +
        esc(topicNames[item.topic] || item.topic) +
        '</span><span class="badge b">Определи по описанию</span></div>' +
        '<div class="q-text">' +
        esc(item.q) +
        '</div><div class="q-sub">Прочитай описание целиком и выбери понятие, которое ему соответствует.</div>' +
        '<div class="q-options">' +
        optionsHtml +
        '</div><div class="q-actions"><button class="btn primary" id="wNext" disabled>Далее →</button>' +
        '<span class="q-hint">Один ответ.</span></div>' +
        '<div class="q-feedback" id="wFeedback" aria-live="polite"></div></div>';

      updateProgress();

      const optionButtons = $$(".q-option", wStage);
      optionButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (state.answered) return;
          state.answered = true;
          const chosen = Number(btn.dataset.wOption);
          const isCorrect = chosen === item.correct;
          if (isCorrect) state.correct++;
          else state.wrong.push(item);

          optionButtons.forEach((opt, index) => {
            opt.disabled = true;
            opt.classList.remove("selected");
            if (index === item.correct) opt.classList.add("correct");
            else if (index === chosen) opt.classList.add("wrong");
          });

          const feedback = $("#wFeedback");
          if (feedback) {
            feedback.className = "q-feedback show " + (isCorrect ? "ok" : "no");
            feedback.innerHTML =
              "<b>" +
              (isCorrect ? "Верно!" : "Не совсем.") +
              "</b>" +
              esc(item.explain) +
              (!isCorrect
                ? '<br><span class="small muted">Правильный ответ: ' +
                  esc(item.options[item.correct]) +
                  ".</span>"
                : "");
          }

          const nextBtn = $("#wNext");
          if (nextBtn) nextBtn.disabled = false;
        });
      });

      const nextBtn = $("#wNext");
      if (nextBtn) {
        nextBtn.addEventListener("click", () => {
          if (!state.answered) return;
          if (state.index + 1 >= state.pool.length) showWordingResult();
          else {
            state.index++;
            renderWording();
          }
        });
      }
    }

    function showWordingResult() {
      const total = state.pool.length;
      const percent = total ? Math.round((state.correct / total) * 100) : 0;
      const all = bests();
      if (percent > (all[state.topic] || 0)) {
        all[state.topic] = percent;
        store.set("ent-wording-best", all);
      }
      renderBest();

      if (wProgress) wProgress.textContent = total + " / " + total;
      if (wBar) wBar.style.width = "100%";
      if (!wStage) return;

      wStage.innerHTML =
        '<div class="q-card center">' +
        '<div class="score-ring" style="--p:' +
        percent +
        '"><span>' +
        percent +
        "%</span></div>" +
        '<h3 style="margin-top:14px">' +
        (percent >= 90
          ? "Отлично: формулировки распознаны."
          : percent >= 70
            ? "Хорошо, но есть что повторить."
            : "Пока путаются похожие понятия.") +
        '</h3><p class="small muted">Правильно ' +
        state.correct +
        " из " +
        total +
        ".</p>" +
        (state.wrong.length
          ? '<p class="small muted">Повтори: ' +
            esc(state.wrong.map((item) => item.options[item.correct]).join(", ")) +
            ".</p>"
          : "") +
        '<button class="btn primary" id="wAgain" style="margin-top:14px">Пройти ещё раз</button></div>';

      const again = $("#wAgain");
      if (again) again.addEventListener("click", () => startWording(state.topic));
    }

    if (wFilters) {
      wFilters.addEventListener("click", (event) => {
        const btn = event.target.closest("[data-wording-topic]");
        if (!btn) return;
        $$("[data-wording-topic]", wFilters).forEach((item) =>
          item.classList.toggle("active", item === btn)
        );
        startWording(btn.dataset.wordingTopic);
      });
    }
    if (wRestart) wRestart.addEventListener("click", () => startWording(state.topic));

    startWording("all");
  }

  /* ------------------------------------------------------------
     Чек-лист
     ------------------------------------------------------------ */

  const checklist = $("[data-checklist]");
  if (checklist) {
    const boxes = $$('input[type="checkbox"]', checklist);
    const countEl = $("#checklistCount");
    const resetBtn = $("#checklistReset");

    function renderChecklist() {
      const checked = boxes.filter((box) => box.checked).length;
      if (countEl) countEl.textContent = checked + " / " + boxes.length;
      store.set(
        "ent-checklist",
        boxes.filter((box) => box.checked).map((box) => box.dataset.checkId)
      );
    }

    const saved = store.get("ent-checklist", []);
    if (Array.isArray(saved)) {
      boxes.forEach((box) => {
        box.checked = saved.includes(box.dataset.checkId);
      });
    }

    boxes.forEach((box) => box.addEventListener("change", renderChecklist));
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        boxes.forEach((box) => {
          box.checked = false;
        });
        renderChecklist();
        showToast("Чек-лист сброшен");
      });
    }
    renderChecklist();
  }

  /* ------------------------------------------------------------
     Видео
     ------------------------------------------------------------ */

  const videoGrid = $("#videoGrid");
  const videoFilters = $("#videoFilters");
  const videoData = (window.ENT_DATA && window.ENT_DATA.videos) || [];

  function renderVideos(topic) {
    if (!videoGrid) return;
    const list =
      !topic || topic === "all"
        ? videoData
        : videoData.filter((video) => video.topic === topic);

    videoGrid.innerHTML = list
      .map(
        (video) =>
          '<article class="video-card"><div class="video-thumb"><img src="https://i.ytimg.com/vi/' +
          esc(video.id) +
          '/hqdefault.jpg" alt="" loading="lazy"><button class="video-play" type="button" aria-label="Смотреть: ' +
          esc(video.title) +
          '"><i>▶</i></button></div><div class="video-body"><h4>' +
          esc(video.title) +
          '</h4><p>' +
          esc(video.note) +
          '</p><div class="video-meta"><span>' +
          esc(video.source) +
          '</span><a href="https://www.youtube.com/watch?v=' +
          esc(video.id) +
          '" target="_blank" rel="noopener">YouTube ↗</a></div></div></article>'
      )
      .join("");

    $$(".video-card", videoGrid).forEach((card, index) => {
      const video = list[index];
      const playBtn = card.querySelector(".video-play");
      const img = card.querySelector("img");
      if (img) {
        img.addEventListener("error", () => {
          img.style.display = "none";
        });
      }
      if (playBtn) {
        playBtn.addEventListener("click", () => {
          const thumb = card.querySelector(".video-thumb");
          if (!thumb) return;
          thumb.innerHTML =
            '<iframe src="https://www.youtube-nocookie.com/embed/' +
            esc(video.id) +
            '?autoplay=1&rel=0" title="' +
            esc(video.title) +
            '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        });
      }
    });
  }

  if (videoFilters) {
    videoFilters.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-video-topic]");
      if (!btn) return;
      $$(".qf", videoFilters).forEach((item) => item.classList.toggle("active", item === btn));
      renderVideos(btn.dataset.videoTopic);
    });
    renderVideos("all");
  }

  /* ------------------------------------------------------------
     Поиск по клавиатуре
     ------------------------------------------------------------ */

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
    if (event.key === "Escape") {
      closeSearch();
      closeSidebar();
    }
  });

  /* ------------------------------------------------------------
     Инициализация
     ------------------------------------------------------------ */

  buildSearchIndex();
  setSection(window.location.hash.slice(1) || "start", false);
})();
