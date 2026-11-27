/* ============================================================
   Данные конспекта: вопросы квиза, флеш-карточки, видео
   ============================================================ */

window.ENT_DATA = {
  quiz: [
    /* ---------- HARDWARE ---------- */
    {
      topic: "hardware", level: "A", type: "single",
      q: "Какая память является энергозависимой и используется для временного хранения данных работающих программ?",
      options: ["SSD", "ROM", "RAM", "HDD"],
      correct: [2],
      explain: "RAM — оперативная память. Она энергозависима: после выключения питания содержимое теряется. SSD, ROM и HDD сохраняют данные без питания."
    },
    {
      topic: "hardware", level: "A", type: "single",
      q: "Что означает аббревиатура ROM?",
      options: ["Оперативная память", "Постоянная память", "Видеопамять", "Кэш-память"],
      correct: [1],
      explain: "ROM — Read-Only Memory, постоянная память. В ней традиционно хранятся прошивки и постоянные данные."
    },
    {
      topic: "hardware", level: "A", type: "single",
      q: "Какое устройство переводит бумажные документы и изображения в цифровую форму?",
      options: ["Принтер", "Сканер", "Плоттер", "Проектор"],
      correct: [1],
      explain: "Сканер — устройство ввода. Принтер и плоттер — вывод, проектор — тоже вывод."
    },
    {
      topic: "hardware", level: "A", type: "single",
      q: "Какое устройство одновременно относится и к вводу, и к выводу?",
      options: ["Монитор", "Сканер", "Сенсорный экран", "Принтер"],
      correct: [2],
      explain: "Touchscreen принимает прикосновения (ввод) и отображает изображение (вывод)."
    },
    {
      topic: "hardware", level: "A", type: "single",
      q: "Процессор работает на частоте 3 GHz. Что это значит?",
      options: ["3 тысячи тактов в секунду", "3 миллиона тактов в секунду", "3 миллиарда тактов в секунду", "3 операции в секунду"],
      correct: [2],
      explain: "1 GHz = 10⁹ Гц, то есть 3 миллиарда тактов в секунду. Количество инструкций за такт зависит от архитектуры."
    },
    {
      topic: "hardware", level: "A", type: "single",
      q: "Какой уровень кэш-памяти обычно самый быстрый?",
      options: ["L1", "L2", "L3", "VRAM"],
      correct: [0],
      explain: "L1 — самый быстрый и обычно самый маленький. Далее L2, затем L3: больше по объёму, но медленнее."
    },
    {
      topic: "hardware", level: "A", type: "single",
      q: "Какой компонент лучше подходит для массово-параллельных графических вычислений?",
      options: ["CPU", "GPU", "RAM", "HDD"],
      correct: [1],
      explain: "GPU содержит множество вычислительных блоков и эффективен для графики, видео и параллельных задач."
    },
    {
      topic: "hardware", level: "A", type: "single",
      q: "Что из перечисленного предназначено для долговременного хранения данных?",
      options: ["RAM", "Кэш L1", "SSD", "Регистры процессора"],
      correct: [2],
      explain: "SSD — энергонезависимый накопитель. RAM, кэш и регистры — быстрые, но энергозависимые рабочие области."
    },
    {
      topic: "hardware", level: "B", type: "single",
      q: "Какая шина передаёт адрес ячейки памяти?",
      options: ["Data Bus", "Address Bus", "Control Bus", "PCI Express"],
      correct: [1],
      explain: "Address Bus передаёт адрес, Control Bus — управляющий сигнал, Data Bus — сами данные."
    },
    {
      topic: "hardware", level: "A", type: "single",
      q: "Какое устройство печатает крупноформатные чертежи и схемы?",
      options: ["Плоттер", "Сканер", "Матричный принтер", "Проектор"],
      correct: [0],
      explain: "Плоттер — устройство вывода для широкоформатной печати. Сканер — ввод, проектор — вывод изображения."
    },
    {
      topic: "hardware", level: "B", type: "single",
      q: "Чем CD-RW отличается от CD-R?",
      options: ["Поддерживает многократную перезапись", "Только читает данные", "Имеет больший диаметр", "Не использует лазер"],
      correct: [0],
      explain: "RW = ReWritable, многократная перезапись. CD-R допускает только однократную запись."
    },
    {
      topic: "hardware", level: "A", type: "single",
      q: "Какой принтер использует порошковый тонер?",
      options: ["Матричный", "Струйный", "Лазерный", "Плоттер"],
      correct: [2],
      explain: "Лазерный принтер использует лазер, фотобарабан и тонер. Струйный — жидкие чернила, матричный — ударную ленту."
    },

    /* ---------- SOFTWARE ---------- */
    {
      topic: "software", level: "A", type: "single",
      q: "Программа, обеспечивающая взаимодействие ОС с конкретным устройством, — это…",
      options: ["Драйвер", "Утилита", "Компилятор", "Браузер"],
      correct: [0],
      explain: "Драйвер — программное обеспечение, которое объясняет ОС, как работать с устройством."
    },
    {
      topic: "software", level: "A", type: "single",
      q: "Что из перечисленного относится к операционным системам?",
      options: ["Microsoft Word", "Google Chrome", "Linux", "Photoshop"],
      correct: [2],
      explain: "Linux — операционная система. Word, Chrome и Photoshop — прикладные программы."
    },
    {
      topic: "software", level: "A", type: "single",
      q: "Антивирус в классификации ПО — это…",
      options: ["Прикладная программа", "Утилита (системное ПО)", "Инструмент разработки", "Операционная система"],
      correct: [1],
      explain: "Антивирус обслуживает систему и защищает её, поэтому относится к утилитам в составе системного ПО."
    },
    {
      topic: "software", level: "A", type: "single",
      q: "Что из перечисленного НЕ является операционной системой?",
      options: ["Windows", "Android", "Linux", "Photoshop"],
      correct: [3],
      explain: "Photoshop — прикладной графический редактор. Windows, Android и Linux — операционные системы."
    },
    {
      topic: "software", level: "B", type: "single",
      q: "Что означает Freeware?",
      options: ["Бесплатное использование, но не обязательно открытый код", "Обязательно открытый исходный код", "Только платное ПО", "ПО без авторских прав"],
      correct: [0],
      explain: "Freeware — бесплатное использование. Open Source — открытый исходный код. Это разные характеристики."
    },
    {
      topic: "software", level: "A", type: "single",
      q: "К какому типу ПО относится PyCharm?",
      options: ["Системное", "Прикладное", "Инструментальное", "Промежуточное"],
      correct: [2],
      explain: "PyCharm — IDE, интегрированная среда разработки. Это инструментальное ПО."
    },
    {
      topic: "software", level: "A", type: "single",
      q: "Что такое процесс?",
      options: ["Файл на диске", "Программа, выполняющаяся в данный момент", "Драйвер устройства", "Раздел накопителя"],
      correct: [1],
      explain: "Процесс — выполняющаяся программа. ОС создаёт процесс, выделяет память и планирует выполнение."
    },
    {
      topic: "software", level: "B", type: "single",
      q: "Что такое файловая система?",
      options: ["Способ организации и хранения файлов на накопителе", "Программа для просмотра видео", "Тип процессора", "Сетевой протокол"],
      correct: [0],
      explain: "Файловая система задаёт способ организации, хранения и управления файлами. Примеры: NTFS, FAT32, ext4, APFS."
    },

    /* ---------- NETWORKS ---------- */
    {
      topic: "networks", level: "A", type: "single",
      q: "Сеть в пределах школы или офисного здания — это…",
      options: ["PAN", "LAN", "MAN", "WAN"],
      correct: [1],
      explain: "LAN — Local Area Network, локальная сеть в пределах комнаты, дома, офиса или здания."
    },
    {
      topic: "networks", level: "A", type: "single",
      q: "Связь смартфона с Bluetooth-наушниками — пример…",
      options: ["PAN", "LAN", "MAN", "WAN"],
      correct: [0],
      explain: "PAN — персональная сеть одного человека на небольшом расстоянии."
    },
    {
      topic: "networks", level: "A", type: "single",
      q: "Сеть, объединяющая несколько локальных сетей в пределах города, — это…",
      options: ["PAN", "LAN", "MAN", "WAN"],
      correct: [2],
      explain: "MAN — Metropolitan Area Network, городская сеть."
    },
    {
      topic: "networks", level: "A", type: "single",
      q: "Интернет — крупнейший пример…",
      options: ["PAN", "LAN", "MAN", "WAN"],
      correct: [3],
      explain: "WAN — глобальная сеть. Интернет — крупнейший пример, но не единственная WAN."
    },
    {
      topic: "networks", level: "A", type: "single",
      q: "Какая топология использует центральный коммутатор?",
      options: ["Шина", "Звезда", "Кольцо", "Ячеистая"],
      correct: [1],
      explain: "В топологии «звезда» все устройства подключены к центральному узлу, обычно коммутатору."
    },
    {
      topic: "networks", level: "A", type: "single",
      q: "Все устройства подключены к одному общему кабелю. Это топология…",
      options: ["Шина", "Звезда", "Кольцо", "Дерево"],
      correct: [0],
      explain: "Шина использует общую линию передачи. Повреждение магистрали может нарушить работу всей сети."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Какая топология даёт альтернативные пути и высокую отказоустойчивость?",
      options: ["Шина", "Звезда", "Ячеистая", "Кольцо"],
      correct: [2],
      explain: "В ячеистой (mesh) топологии множество соединений, поэтому есть альтернативные маршруты. Плата — больше связей и сложнее настройка."
    },
    {
      topic: "networks", level: "A", type: "single",
      q: "В модели клиент-сервер кто отправляет запрос?",
      options: ["Сервер", "Клиент", "Маршрутизатор", "DNS"],
      correct: [1],
      explain: "Клиент запрашивает услугу или ресурс, сервер обрабатывает запрос и возвращает ответ."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Главная особенность P2P:",
      options: ["Обязательный центральный сервер", "Устройства обмениваются данными напрямую без обязательного центра", "Только беспроводная передача", "Только передача файлов"],
      correct: [1],
      explain: "В peer-to-peer нет обязательного выделенного центрального сервера: узлы могут обмениваться данными напрямую."
    },

    /* ---------- EQUIPMENT ---------- */
    {
      topic: "equipment", level: "A", type: "single",
      q: "Устройство пересылает Ethernet-кадры по MAC-адресу назначения. Это…",
      options: ["Hub", "Switch", "Router", "Modem"],
      correct: [1],
      explain: "Switch работает на канальном уровне и использует MAC-адреса. Router использует IP."
    },
    {
      topic: "equipment", level: "A", type: "single",
      q: "Устройство маршрутизирует IP-пакеты между разными сетями. Это…",
      options: ["Switch", "Router", "Hub", "Repeater"],
      correct: [1],
      explain: "Router выбирает маршрут по IP-адресам и таблице маршрутизации, соединяя разные сети."
    },
    {
      topic: "equipment", level: "A", type: "single",
      q: "Устройство повторяет сигнал на все порты, не анализируя MAC-адрес. Это…",
      options: ["Switch", "Router", "Hub", "Gateway"],
      correct: [2],
      explain: "Hub — концентратор. Он работает на физическом уровне и рассылает сигнал по портам."
    },
    {
      topic: "equipment", level: "A", type: "single",
      q: "Что делает модем?",
      options: ["Маршрутизирует IP-пакеты", "Преобразует сигналы: модуляция и демодуляция", "Фильтрует трафик по правилам", "Хранит файлы"],
      correct: [1],
      explain: "Modem = modulator + demodulator. Он обеспечивает передачу данных по линии связи, преобразуя сигналы."
    },
    {
      topic: "equipment", level: "A", type: "single",
      q: "Какое устройство подключает Wi-Fi-клиентов к проводной локальной сети?",
      options: ["Access Point", "Router", "Modem", "Bridge"],
      correct: [0],
      explain: "Точка доступа принимает беспроводных клиентов и передаёт их данные в проводную LAN."
    },
    {
      topic: "equipment", level: "B", type: "single",
      q: "Мост (bridge) соединяет сегменты LAN и передаёт кадры по…",
      options: ["IP-адресам", "MAC-адресам", "Доменным именам", "Портам TCP"],
      correct: [1],
      explain: "Bridge обычно работает на канальном уровне и использует MAC-адреса."
    },
    {
      topic: "equipment", level: "B", type: "single",
      q: "Default Gateway — это…",
      options: ["Адрес DNS-сервера", "Адрес маршрутизатора для пакетов в другие сети", "MAC-адрес коммутатора", "Порт HTTP"],
      correct: [1],
      explain: "Шлюз по умолчанию — адрес маршрутизатора, которому устройство отправляет пакеты, предназначенные для других сетей."
    },

    /* ---------- PROTOCOLS ---------- */
    {
      topic: "protocols", level: "A", type: "single",
      q: "Какой протокол преобразует доменное имя в IP-адрес?",
      options: ["DHCP", "DNS", "FTP", "SMTP"],
      correct: [1],
      explain: "DNS — Domain Name System. Он возвращает IP-адрес по доменному имени."
    },
    {
      topic: "protocols", level: "A", type: "single",
      q: "Какой протокол автоматически выдаёт IP-адрес и сетевые настройки?",
      options: ["DNS", "DHCP", "HTTP", "TCP"],
      correct: [1],
      explain: "DHCP выдаёт IP, маску, шлюз и DNS-серверы. Этапы: Discover, Offer, Request, Ack."
    },
    {
      topic: "protocols", level: "A", type: "single",
      q: "Какой протокол обеспечивает защищённую передачу веб-данных?",
      options: ["HTTP", "FTP", "HTTPS", "SMTP"],
      correct: [2],
      explain: "HTTPS — HTTP с TLS. Обычно использует порт 443."
    },
    {
      topic: "protocols", level: "A", type: "single",
      q: "Какой протокол используется для отправки электронной почты?",
      options: ["SMTP", "IMAP", "POP3", "FTP"],
      correct: [0],
      explain: "SMTP отправляет письма. IMAP и POP3 — получение."
    },
    {
      topic: "protocols", level: "A", type: "single",
      q: "Какой протокол обеспечивает надёжную доставку с установлением соединения?",
      options: ["UDP", "TCP", "IP", "ICMP"],
      correct: [1],
      explain: "TCP устанавливает соединение, контролирует доставку и порядок, повторно отправляет потерянные данные."
    },
    {
      topic: "protocols", level: "A", type: "single",
      q: "Какой протокол передаёт данные без гарантии доставки?",
      options: ["TCP", "UDP", "HTTP", "SSH"],
      correct: [1],
      explain: "UDP передаёт датаграммы без обязательного соединения и без гарантии доставки."
    },
    {
      topic: "protocols", level: "A", type: "single",
      q: "Какой протокол используется для передачи файлов между клиентом и сервером?",
      options: ["FTP", "SMTP", "DNS", "DHCP"],
      correct: [0],
      explain: "FTP — File Transfer Protocol. Классически использует TCP-порты 20 и 21."
    },
    {
      topic: "protocols", level: "B", type: "single",
      q: "Какой протокол получает почту и синхронизирует её с сервером?",
      options: ["POP3", "IMAP", "SMTP", "FTP"],
      correct: [1],
      explain: "IMAP удобен для нескольких устройств: письма хранятся на сервере и синхронизируются."
    },
    {
      topic: "protocols", level: "B", type: "single",
      q: "Утилита ping использует сообщения какого протокола в IPv4?",
      options: ["ICMP", "TCP", "UDP", "ARP"],
      correct: [0],
      explain: "ping отправляет ICMP Echo Request и получает Echo Reply."
    },
    {
      topic: "protocols", level: "B", type: "single",
      q: "Какой порт обычно использует HTTPS?",
      options: ["80", "443", "21", "53"],
      correct: [1],
      explain: "HTTP — 80, HTTPS — 443, FTP — 20/21, DNS — 53."
    },

    /* ---------- ADDRESSING ---------- */
    {
      topic: "addressing", level: "A", type: "single",
      q: "Сколько бит в IPv4-адресе?",
      options: ["32", "48", "64", "128"],
      correct: [0],
      explain: "IPv4 — 32 бита, четыре октета по 8 бит. IPv6 — 128 бит, MAC Ethernet — 48 бит."
    },
    {
      topic: "addressing", level: "A", type: "single",
      q: "Сколько бит обычно в MAC-адресе Ethernet?",
      options: ["32", "48", "64", "128"],
      correct: [1],
      explain: "MAC-адрес Ethernet обычно 48 бит и записывается шестью парами hex-цифр."
    },
    {
      topic: "addressing", level: "A", type: "single",
      q: "Сколько всего адресов в подсети /24?",
      options: ["128", "254", "256", "512"],
      correct: [2],
      explain: "2^(32−24) = 2^8 = 256 адресов. Обычно 254 доступны узлам: адрес сети и broadcast зарезервированы."
    },
    {
      topic: "addressing", level: "B", type: "single",
      q: "Сколько адресов обычно доступно для узлов в подсети /29?",
      options: ["4", "6", "8", "14"],
      correct: [1],
      explain: "/29 — блок из 8 адресов: 6 доступно узлам после резервирования адреса сети и broadcast."
    },
    {
      topic: "addressing", level: "A", type: "single",
      q: "Какой адрес является частным (private)?",
      options: ["8.8.8.8", "192.168.1.10", "195.114.56.10", "1.1.1.1"],
      correct: [1],
      explain: "Частные диапазоны: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16."
    },
    {
      topic: "addressing", level: "A", type: "single",
      q: "Сколько бит в IPv6-адресе?",
      options: ["32", "48", "64", "128"],
      correct: [3],
      explain: "IPv6 использует 128-битные адреса и шестнадцатеричную запись через двоеточия."
    },

    /* ---------- SECURITY ---------- */
    {
      topic: "security", level: "A", type: "single",
      q: "Принцип, гарантирующий доступ к информации только уполномоченным лицам, — это…",
      options: ["Confidentiality", "Integrity", "Availability", "Authorization"],
      correct: [0],
      explain: "Confidentiality — конфиденциальность. Доступ только тем, у кого есть права."
    },
    {
      topic: "security", level: "A", type: "single",
      q: "Защита от несанкционированного изменения данных — это…",
      options: ["Confidentiality", "Integrity", "Availability", "Authentication"],
      correct: [1],
      explain: "Integrity — целостность. Данные сохраняют точность и полноту, изменения обнаруживаются."
    },
    {
      topic: "security", level: "A", type: "single",
      q: "DDoS-атака прежде всего угрожает…",
      options: ["Confidentiality", "Integrity", "Availability", "Authorization"],
      correct: [2],
      explain: "DDoS создаёт перегрузку и нарушает доступность сервиса. Это угроза Availability."
    },
    {
      topic: "security", level: "A", type: "single",
      q: "Какая вредоносная программа маскируется под полезное ПО?",
      options: ["Вирус", "Червь", "Троян", "Rootkit"],
      correct: [2],
      explain: "Троян выдаёт себя за легитимную программу, а внутри выполняет вредоносные действия."
    },
    {
      topic: "security", level: "A", type: "single",
      q: "Какая вредоносная программа самостоятельно распространяется между системами?",
      options: ["Вирус", "Червь", "Троян", "Adware"],
      correct: [1],
      explain: "Червь (worm) распространяется самостоятельно, например через сеть. Вирусу часто нужен запуск заражённого объекта."
    },
    {
      topic: "security", level: "A", type: "single",
      q: "Программа шифрует файлы и требует выкуп. Это…",
      options: ["Spyware", "Ransomware", "Adware", "Keylogger"],
      correct: [1],
      explain: "Ransomware блокирует или шифрует данные и требует выкуп."
    },
    {
      topic: "security", level: "A", type: "single",
      q: "Проверка личности пользователя — это…",
      options: ["Авторизация", "Аутентификация", "Дефрагментация", "Хеширование"],
      correct: [1],
      explain: "Аутентификация отвечает на вопрос «кто ты?». Авторизация определяет права."
    },
    {
      topic: "security", level: "A", type: "single",
      q: "Определение прав пользователя после входа в систему — это…",
      options: ["Аутентификация", "Авторизация", "Шифрование", "Резервирование"],
      correct: [1],
      explain: "Авторизация отвечает на вопрос «что тебе разрешено?»."
    },
    {
      topic: "security", level: "B", type: "single",
      q: "Что такое хеширование?",
      options: ["Обратимое шифрование с ключом", "Преобразование данных в значение фиксированной длины", "Создание резервной копии", "Фильтрация трафика"],
      correct: [1],
      explain: "Хеш-функция преобразует данные в значение фиксированной длины. Восстановить исходные данные из хеша нельзя."
    },
    {
      topic: "security", level: "A", type: "single",
      q: "Изолированное хранилище подозрительных файлов — это…",
      options: ["Карантин", "Корзина", "Архив", "Резервная копия"],
      correct: [0],
      explain: "Карантин изолирует файл, чтобы он не мог использоваться, но сохраняет его для проверки."
    },
    {
      topic: "security", level: "A", type: "single",
      q: "Что контролирует сетевой трафик по правилам безопасности?",
      options: ["Антивирус", "Firewall", "Архиватор", "Дефрагментатор"],
      correct: [1],
      explain: "Firewall (брандмауэр) фильтрует входящие и исходящие соединения по правилам."
    },
    {
      topic: "security", level: "A", type: "single",
      q: "Фишинг — это…",
      options: ["Мошенничество для получения конфиденциальных данных", "Тип шифрования", "Резервное копирование", "Сетевой протокол"],
      correct: [0],
      explain: "Фишинг выдаёт себя за доверенную организацию и пытается обманом получить пароли, коды или данные карты."
    },
    {
      topic: "security", level: "B", type: "single",
      q: "Incremental backup копирует изменения с момента…",
      options: ["Последней полной копии", "Последнего резервного копирования любого типа", "Создания файла", "Последнего включения компьютера"],
      correct: [1],
      explain: "Incremental — изменения с последнего бэкапа любого типа. Differential — с последнего полного."
    },

    /* ---------- MULTIPLE ANSWERS ---------- */
    {
      topic: "hardware", level: "A", type: "multi",
      q: "Выбери все устройства ввода.",
      options: ["Клавиатура", "Микрофон", "Сканер", "Монитор", "Принтер"],
      correct: [0, 1, 2],
      explain: "Клавиатура, микрофон и сканер передают данные в компьютер. Монитор и принтер — устройства вывода."
    },
    {
      topic: "hardware", level: "A", type: "multi",
      q: "Выбери все устройства вывода.",
      options: ["Монитор", "Принтер", "Проектор", "Сканер", "Микрофон"],
      correct: [0, 1, 2],
      explain: "Монитор, принтер и проектор выводят результат. Сканер и микрофон — ввод."
    },
    {
      topic: "software", level: "A", type: "multi",
      q: "Что относится к системному ПО?",
      options: ["Windows", "Драйвер принтера", "Антивирус", "Microsoft Word", "Google Chrome"],
      correct: [0, 1, 2],
      explain: "Windows — ОС, драйвер и антивирус относятся к системному ПО (антивирус — утилита). Word и Chrome — прикладные."
    },
    {
      topic: "software", level: "A", type: "multi",
      q: "Что относится к прикладному ПО?",
      options: ["Microsoft Word", "Google Chrome", "Photoshop", "Linux", "Компилятор GCC"],
      correct: [0, 1, 2],
      explain: "Word, Chrome и Photoshop решают пользовательские задачи. Linux — ОС, GCC — инструмент разработки."
    },
    {
      topic: "addressing", level: "B", type: "multi",
      q: "Выбери частные IPv4-адреса.",
      options: ["192.168.1.10", "10.0.0.5", "172.16.5.4", "8.8.8.8", "195.114.56.10"],
      correct: [0, 1, 2],
      explain: "Частные диапазоны: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. 8.8.8.8 и 195.114.56.10 — публичные."
    },
    {
      topic: "protocols", level: "A", type: "multi",
      q: "Какие протоколы связаны с электронной почтой?",
      options: ["SMTP", "IMAP", "POP3", "FTP", "DNS"],
      correct: [0, 1, 2],
      explain: "SMTP отправляет, IMAP и POP3 получают почту. FTP — файлы, DNS — имена."
    },
    {
      topic: "security", level: "B", type: "multi",
      q: "Что помогает обеспечить конфиденциальность?",
      options: ["Шифрование", "Сильные пароли", "Многофакторная аутентификация", "Дефрагментация диска", "Очистка корзины"],
      correct: [0, 1, 2],
      explain: "Шифрование, пароли и MFA ограничивают доступ. Дефрагментация и очистка корзины — обслуживание, не защита конфиденциальности."
    },
    {
      topic: "security", level: "B", type: "multi",
      q: "Что направлено на нарушение доступности сервиса?",
      options: ["DoS-атака", "DDoS-атака", "Перегрузка канала запросами", "Подбор пароля", "Перехват трафика"],
      correct: [0, 1, 2],
      explain: "DoS, DDoS и перегрузка запросами мешают сервису работать. Подбор пароля и перехват — другие угрозы."
    },
    {
      topic: "networks", level: "A", type: "multi",
      q: "Что относится к глобальным сетям (WAN)?",
      options: ["Интернет", "Сеть между филиалами в разных странах", "Домашняя сеть из двух ноутбуков", "Сеть Bluetooth-наушников"],
      correct: [0, 1],
      explain: "WAN охватывает страны и континенты. Домашняя сеть — LAN, Bluetooth-наушники — PAN."
    },

    /* ---------- TRUE / FALSE ---------- */
    {
      topic: "equipment", level: "A", type: "tf",
      q: "Hub анализирует MAC-адрес назначения и отправляет кадр только нужному порту.",
      options: ["Верно", "Неверно"],
      correct: [1],
      explain: "Неверно. Hub рассылает сигнал на остальные порты. Анализом MAC и адресной пересылкой занимается switch."
    },
    {
      topic: "equipment", level: "B", type: "tf",
      q: "Коммутатор создаёт отдельный домен коллизий на каждом порту.",
      options: ["Верно", "Неверно"],
      correct: [0],
      explain: "Верно. У классического hub все порты в одном домене коллизий, у switch — отдельный домен на порт."
    },
    {
      topic: "protocols", level: "A", type: "tf",
      q: "UDP гарантирует доставку и порядок датаграмм.",
      options: ["Верно", "Неверно"],
      correct: [1],
      explain: "Неверно. UDP не гарантирует ни доставку, ни порядок. Эти механизмы есть у TCP."
    },
    {
      topic: "protocols", level: "A", type: "tf",
      q: "HTTPS использует TLS для защиты соединения.",
      options: ["Верно", "Неверно"],
      correct: [0],
      explain: "Верно. HTTPS — это HTTP поверх TLS. Обычно порт 443."
    },
    {
      topic: "hardware", level: "B", type: "tf",
      q: "Любой современный чип ROM физически невозможно изменить.",
      options: ["Верно", "Неверно"],
      correct: [1],
      explain: "Неверно. Прошивка часто хранится во Flash-памяти и перепрограммируется. «Read-only» — историческое название категории."
    },
    {
      topic: "software", level: "B", type: "tf",
      q: "Freeware всегда означает открытый исходный код.",
      options: ["Верно", "Неверно"],
      correct: [1],
      explain: "Неверно. Freeware — бесплатное использование. Открытость кода — отдельная характеристика (Open Source)."
    },
    {
      topic: "hardware", level: "A", type: "tf",
      q: "RAM сохраняет данные после выключения компьютера.",
      options: ["Верно", "Неверно"],
      correct: [1],
      explain: "Неверно. RAM энергозависима. Для долговременного хранения нужны SSD, HDD или другие накопители."
    },
    {
      topic: "hardware", level: "A", type: "tf",
      q: "CD-RW поддерживает многократную перезапись.",
      options: ["Верно", "Неверно"],
      correct: [0],
      explain: "Верно. RW = ReWritable. CD-R допускает только однократную запись."
    },

    /* ---------- PROGRAMMING ---------- */
    {
      topic: "programming", lang: "JavaScript", level: "A", type: "single",
      q: "Какой метод добавляет новый элемент в конец массива?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correct: [0],
      explain: "push() добавляет элемент в конец массива и возвращает новую длину. pop() удаляет последний, shift() — первый, unshift() добавляет в начало."
    },
    {
      topic: "programming", lang: "JavaScript", level: "A", type: "single",
      q: "Какой метод удаляет последний элемент массива и возвращает его значение?",
      options: ["push()", "pop()", "shift()", "slice()"],
      correct: [1],
      explain: "pop() удаляет последний элемент и возвращает его. push() добавляет в конец, shift() удаляет первый."
    },
    {
      topic: "programming", lang: "JavaScript", level: "A", type: "single",
      q: "Какая функция преобразует строку в целое число?",
      options: ["parseInt()", "parseFloat()", "String()", "Number.isInteger()"],
      correct: [0],
      explain: "parseInt() разбирает строку и возвращает целое число. parseFloat() возвращает число с плавающей точкой, String() — наоборот, строку."
    },
    {
      topic: "programming", lang: "JavaScript", level: "A", type: "single",
      q: "Какой оператор сравнивает значения строго, без приведения типов?",
      options: ["=", "==", "===", "!="],
      correct: [2],
      explain: "=== сравнивает значение и тип без приведения. == допускает приведение типов, = — присваивание."
    },
    {
      topic: "programming", level: "A", type: "single",
      q: "Какая конструкция выполняет блок кода только при истинности условия?",
      options: ["for", "if", "while", "switch"],
      correct: [1],
      explain: "if проверяет условие и выполняет блок, если оно истинно. for и while — циклы, switch выбирает ветвь по значению."
    },
    {
      topic: "programming", level: "A", type: "single",
      q: "Какой цикл выполняется, пока условие остаётся истинным?",
      options: ["if", "while", "return", "try"],
      correct: [1],
      explain: "while повторяет блок, пока условие истинно. Важно менять условие внутри цикла, иначе он станет бесконечным."
    },
    {
      topic: "programming", lang: "JavaScript", level: "B", type: "single", wording: true,
      q: "Язык программирования, который используют для интерактивности веб-страниц и взаимодействия с элементами HTML-документа.",
      options: ["HTML", "CSS", "JavaScript", "SQL"],
      correct: [2],
      explain: "Речь о JavaScript. HTML задаёт структуру, CSS — оформление, SQL — работу с базами данных."
    },
    {
      topic: "programming", lang: "JavaScript", level: "B", type: "single", wording: true,
      q: "Объектная модель, представляющая HTML-документ в виде дерева элементов, к которым может обращаться программа.",
      options: ["DOM", "CSSOM", "JSON", "API"],
      correct: [0],
      explain: "DOM (Document Object Model) — дерево элементов страницы. Через DOM JavaScript изменяет содержимое и стили."
    },
    {
      topic: "programming", lang: "JavaScript", level: "A", type: "single",
      q: "С какого индекса начинается нумерация элементов массива в JavaScript?",
      options: ["0", "1", "-1", "С любого"],
      correct: [0],
      explain: "В JavaScript индексация начинается с 0: первый элемент имеет индекс 0, второй — 1."
    },
    {
      topic: "programming", level: "B", type: "single", wording: true,
      q: "Именованный блок кода, который можно вызвать несколько раз и которому можно передать аргументы.",
      options: ["Массив", "Функция", "Цикл", "Объект"],
      correct: [1],
      explain: "Функция инкапсулирует действия, принимает аргументы и возвращает результат. Это основной способ переиспользования кода."
    },
    {
      topic: "programming", lang: "JavaScript", level: "A", type: "multi",
      q: "Какие методы изменяют исходный массив?",
      options: ["push()", "pop()", "splice()", "map()", "slice()"],
      correct: [0, 1, 2],
      explain: "push(), pop() и splice() изменяют исходный массив. map() и slice() возвращают новый массив, не меняя старый."
    },
    {
      topic: "programming", lang: "JavaScript", level: "B", type: "multi",
      q: "Какие операторы сравнивают значения без приведения типов?",
      options: ["==", "===", "!=", "!=="],
      correct: [1, 3],
      explain: "Строгое сравнение без приведения типов — === и !==. Операторы == и != допускают приведение типов."
    },

    /* ---------- PROGRAMMING · PYTHON: ЧТЕНИЕ КОДА ---------- */
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Что выведет программа?",
      code: "A = [4, -2, 7, -5, 3]\ns = 0\nfor x in A:\n    if x > 0:\n        s += x\nprint(s)",
      options: ["14", "12", "9", "5"],
      correct: [0],
      explain: "Суммируются только положительные элементы: 4 + 7 + 3 = 14. Отрицательные −2 и −5 пропускаются условием x > 0."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Что выведет программа?",
      code: "A = [3, 8, 5, 12]\nprint(A[1] + A[-1])",
      options: ["20", "11", "17", "23"],
      correct: [0],
      explain: "A[1] — второй элемент, это 8. A[-1] — последний элемент, это 12. 8 + 12 = 20."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Что выведет программа?",
      code: 'print(len("информатика"))',
      options: ["11", "10", "12", "22"],
      correct: [0],
      explain: "len() возвращает количество символов в строке. В слове «информатика» 11 букв, поэтому результат 11."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Что выведет программа?",
      code: "s = 0\nfor i in range(1, 5):\n    s += i\nprint(s)",
      options: ["10", "15", "9", "4"],
      correct: [0],
      explain: "range(1, 5) даёт числа 1, 2, 3, 4 — правая граница не включается. Сумма 1 + 2 + 3 + 4 = 10."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Что выведет программа?",
      code: "print(17 // 5, 17 % 5)",
      options: ["3 2", "3 3", "2 3", "4 1"],
      correct: [0],
      explain: "// — целочисленное деление: 17 // 5 = 3. % — остаток: 17 % 5 = 2. Поэтому вывод: 3 2."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Что выведет программа?",
      code: "x = 10\nwhile x > 3:\n    x -= 3\nprint(x)",
      options: ["1", "4", "7", "0"],
      correct: [0],
      explain: "x меняется так: 10 → 7 → 4 → 1. При x = 1 условие 1 > 3 ложно, цикл завершается, выводится 1."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Что выведет программа?",
      code: 'print("5" + "3")',
      options: ["53", "8", "35", "Ошибка"],
      correct: [0],
      explain: "Оба значения — строки, поэтому + выполняет конкатенацию: «5» + «3» = «53». Число 8 получилось бы при 5 + 3 без кавычек."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Что выведет программа?",
      code: "A = [7, 2, 9, 4]\nprint(max(A) - min(A))",
      options: ["7", "9", "2", "5"],
      correct: [0],
      explain: "max(A) = 9, min(A) = 2. Разность 9 − 2 = 7."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Что выведет программа?",
      code: "print(sorted([3, 1, 2], reverse=True))",
      options: ["[3, 2, 1]", "[1, 2, 3]", "[2, 1, 3]", "[3, 1, 2]"],
      correct: [0],
      explain: "sorted() возвращает новый отсортированный список. reverse=True включает сортировку по убыванию: [3, 2, 1]."
    },
    {
      topic: "programming", lang: "Python", level: "B", type: "single",
      q: "Сколько раз выполнится тело внутреннего цикла?",
      code: "k = 0\nfor i in range(3):\n    for j in range(2):\n        k += 1\nprint(k)",
      options: ["6", "5", "9", "3"],
      correct: [0],
      explain: "Внешний цикл выполняется 3 раза, внутренний — 2 раза при каждом проходе. Итого 3 · 2 = 6 увеличений k."
    },
    {
      topic: "programming", lang: "Python", level: "B", type: "single",
      q: "Что выведет программа?",
      code: "def f(a, b):\n    return a * b + 1\n\nprint(f(3, 4))",
      options: ["13", "12", "7", "25"],
      correct: [0],
      explain: "В функцию передаются a = 3 и b = 4. Возвращается 3 · 4 + 1 = 13."
    },
    {
      topic: "programming", lang: "Python", level: "B", type: "single",
      q: "Что выведет программа?",
      code: "def fact(n):\n    if n == 1:\n        return 1\n    return n * fact(n - 1)\n\nprint(fact(4))",
      options: ["24", "12", "10", "4"],
      correct: [0],
      explain: "Это рекурсивный факториал: 4 · 3 · 2 · 1 = 24. Функция вызывает саму себя, пока n не станет равно 1."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Что выведет программа?",
      code: 's = "Python"\nprint(s[0] + s[-1])',
      options: ["Pn", "Py", "P", "yn"],
      correct: [0],
      explain: "s[0] — первый символ «P», s[-1] — последний символ «n». Конкатенация даёт «Pn»."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Что выведет программа?",
      code: "A = [1, 2, 3]\nA.append(4)\nprint(len(A))",
      options: ["4", "3", "5", "1"],
      correct: [0],
      explain: "append(4) добавляет элемент в конец списка. Было 3 элемента, стало 4, поэтому len(A) = 4."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Что выведет программа?",
      code: "print(2 ** 3 + 1)",
      options: ["9", "7", "8", "6"],
      correct: [0],
      explain: "** — возведение в степень, оно выполняется раньше сложения: 2³ = 8, затем 8 + 1 = 9."
    },
    {
      topic: "programming", lang: "Python", level: "B", type: "single",
      q: "Что выведет программа?",
      code: "A = [10, 20, 30, 40, 50]\nprint(A[1:3])",
      options: ["[20, 30]", "[10, 20]", "[20, 30, 40]", "[30, 40]"],
      correct: [0],
      explain: "Срез A[1:3] берёт элементы с индекса 1 до индекса 3, не включая его: A[1] = 20 и A[2] = 30."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Что выведет программа?",
      code: "A = [1, 2, 3, 4, 5]\ns = 0\nfor x in A:\n    if x % 2 == 0:\n        s += x\nprint(s)",
      options: ["6", "9", "15", "4"],
      correct: [0],
      explain: "Условие x % 2 == 0 отбирает чётные элементы: 2 и 4. Их сумма 2 + 4 = 6."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "В каком режиме открыт файл в записи f = open(\"input.txt\", \"r\")?",
      options: ["Для чтения", "Для записи", "Для добавления в конец", "Для чтения и записи"],
      correct: [0],
      explain: "Режим «r» (read) открывает файл только для чтения. «w» — для записи с очисткой файла, «a» — для добавления в конец."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Какой режим open() добавляет данные в конец существующего файла, не стирая его содержимое?",
      options: ["\"r\"", "\"w\"", "\"a\"", "\"x\""],
      correct: [2],
      explain: "Режим «a» (append) дописывает данные в конец. «w» очищает файл перед записью, «r» только читает, «x» создаёт новый файл и падает, если он уже есть."
    },

    /* ---------- PROGRAMMING · ВЫБОР ПРАВИЛЬНОГО КОДА ---------- */
    {
      topic: "programming", lang: "Python", level: "B", type: "single",
      q: "Выберите код, который вычисляет сумму положительных элементов массива A из 6 элементов и выводит её на экран.",
      options: [
        { code: "s = 0\nfor x in A:\n    if x > 0:\n        s += x\nprint(s)" },
        { code: "s = 0\nfor x in A:\n    if x < 0:\n        s += x\nprint(s)" },
        { code: "s = 1\nfor x in A:\n    if x > 0:\n        s *= x\nprint(s)" },
        { code: "s = 0\nfor x in A:\n    s += x\nprint(s)" }
      ],
      correct: [0],
      explain: "Нужен счётчик s = 0, перебор всех элементов и условие x > 0. Вариант 2 суммирует отрицательные, вариант 3 считает произведение, вариант 4 суммирует всё подряд."
    },
    {
      topic: "programming", lang: "Python", level: "B", type: "single",
      q: "Выберите код, который считает количество отрицательных элементов массива A и выводит результат.",
      options: [
        { code: "k = 0\nfor x in A:\n    if x < 0:\n        k += 1\nprint(k)" },
        { code: "k = 0\nfor x in A:\n    if x > 0:\n        k += 1\nprint(k)" },
        { code: "k = 1\nfor x in A:\n    if x < 0:\n        k += 1\nprint(k)" },
        { code: "k = 0\nfor x in A:\n    k += x\nprint(k)" }
      ],
      correct: [0],
      explain: "Счётчик начинается с 0 и увеличивается на 1 при каждом отрицательном элементе. Вариант 2 считает положительные, вариант 3 даёт результат на 1 больше, вариант 4 суммирует значения."
    },
    {
      topic: "programming", lang: "Python", level: "B", type: "single",
      q: "Дан массив A = [5, 2, 7, 4, 9]. Выберите код, который считает сумму элементов с чётными индексами (0, 2, 4).",
      options: [
        { code: "s = 0\nfor i in range(0, len(A), 2):\n    s += A[i]\nprint(s)" },
        { code: "s = 0\nfor i in range(1, len(A), 2):\n    s += A[i]\nprint(s)" },
        { code: "s = 0\nfor i in range(len(A)):\n    if A[i] % 2 == 0:\n        s += A[i]\nprint(s)" },
        { code: "s = 0\nfor i in range(len(A)):\n    s += A[i]\nprint(s)" }
      ],
      correct: [0],
      explain: "range(0, len(A), 2) перебирает индексы 0, 2, 4 — это 5 + 7 + 9 = 21. Вариант 2 берёт нечётные индексы, вариант 3 — чётные значения, вариант 4 — все элементы."
    },
    {
      topic: "programming", lang: "Python", level: "B", type: "single",
      q: "Дан массив A = [2, -3, 4, -1, 5]. Выберите код, который вычисляет произведение положительных элементов.",
      options: [
        { code: "p = 1\nfor x in A:\n    if x > 0:\n        p *= x\nprint(p)" },
        { code: "p = 0\nfor x in A:\n    if x > 0:\n        p *= x\nprint(p)" },
        { code: "p = 1\nfor x in A:\n    if x < 0:\n        p *= x\nprint(p)" },
        { code: "p = 1\nfor x in A:\n    p *= x\nprint(p)" }
      ],
      correct: [0],
      explain: "Для произведения начальное значение должно быть 1, а не 0. Условие x > 0 отбирает 2, 4 и 5: 2 · 4 · 5 = 40."
    },
    {
      topic: "programming", lang: "Python", level: "B", type: "single",
      q: "Выберите код, который выводит элементы массива A в обратном порядке.",
      options: [
        { code: "for i in range(len(A) - 1, -1, -1):\n    print(A[i])" },
        { code: "for i in range(len(A)):\n    print(A[i])" },
        { code: "for i in range(len(A) - 1):\n    print(A[i])" },
        { code: "for i in range(1, len(A)):\n    print(A[i])" }
      ],
      correct: [0],
      explain: "range(len(A) - 1, -1, -1) идёт от последнего индекса к нулю с шагом −1. Остальные варианты выводят элементы в прямом порядке или пропускают часть массива."
    },

    /* ---------- PROGRAMMING · ЗАДАНИЯ НА ОСНОВЕ КОНТЕКСТА ---------- */
    {
      topic: "programming", level: "A", type: "single",
      q: "Последовательность Фибоначчи начинается так: 0, 1, 1, 2, 3, 5, 8, 13, 21, … Какое число идёт сразу после 21?",
      options: ["34", "29", "42", "26"],
      correct: [0],
      explain: "Каждое следующее число равно сумме двух предыдущих: 13 + 21 = 34."
    },
    {
      topic: "programming", lang: "Python", level: "B", type: "single",
      q: "Что выведет программа?",
      code: "a, b = 0, 1\nfor i in range(5):\n    a, b = b, a + b\nprint(a)",
      options: ["5", "8", "3", "13"],
      correct: [0],
      explain: "Пары (a, b) после каждого шага: (1,1), (1,2), (2,3), (3,5), (5,8). После пятого шага a = 5."
    },
    {
      topic: "programming", level: "B", type: "single",
      q: "В последовательности Фибоначчи 1, 1, 2, 3, 5, 8, 13, 21, … найдите сумму первых шести чисел.",
      options: ["20", "19", "21", "13"],
      correct: [0],
      explain: "Первые шесть чисел: 1, 1, 2, 3, 5, 8. Их сумма 1 + 1 + 2 + 3 + 5 + 8 = 20."
    },
    {
      topic: "programming", lang: "Python", level: "B", type: "single",
      q: "Максат хранит номера автобусов и оставшееся время до прибытия в двух списках. Что выведет программа?",
      code: 'routes = ["12", "25", "40"]\ntimes = [4, 7, 2]\ni = times.index(min(times))\nprint(routes[i])',
      options: ["40", "25", "12", "2"],
      correct: [0],
      explain: "min(times) = 2, метод index находит позицию 2 — это индекс 2. routes[2] = «40», то есть раньше всех придёт автобус №40."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Используя те же списки, определите, сколько минут осталось до автобуса №25.",
      code: 'routes = ["12", "25", "40"]\ntimes = [4, 7, 2]\nprint(times[routes.index("25")])',
      options: ["7", "4", "2", "25"],
      correct: [0],
      explain: "routes.index(«25») возвращает 1 — позицию автобуса №25. times[1] = 7, значит до него 7 минут."
    },
    {
      topic: "programming", lang: "Python", level: "B", type: "single",
      q: "Что выведет программа?",
      code: 'names = ["Аня", "Боря", "Вера"]\nscores = [4, 5, 3]\nprint(names[scores.index(5)])',
      options: ["Боря", "Аня", "Вера", "5"],
      correct: [0],
      explain: "scores.index(5) возвращает 1. names[1] = «Боря» — ученик, который получил 5."
    },

    /* ---------- PROGRAMMING · АЛГОРИТМЫ И ОБЩИЕ ПОНЯТИЯ ---------- */
    {
      topic: "programming", level: "A", type: "single",
      q: "Какой цикл называется циклом с постусловием?",
      options: ["while", "repeat … until", "for", "if"],
      correct: [1],
      explain: "Цикл с постусловием (repeat … until) сначала выполняет тело, а потом проверяет условие. Поэтому тело выполняется хотя бы один раз."
    },
    {
      topic: "programming", level: "A", type: "single",
      q: "Какая фигура блок-схемы обозначает проверку условия?",
      options: ["Параллелограмм", "Прямоугольник", "Ромб", "Овал"],
      correct: [2],
      explain: "Ромб — проверка условия (ветвление). Прямоугольник — действие, параллелограмм — ввод/вывод, овал — начало и конец."
    },
    {
      topic: "programming", level: "A", type: "single",
      q: "Какая фигура блок-схемы обозначает выполнение действия?",
      options: ["Ромб", "Прямоугольник", "Параллелограмм", "Овал"],
      correct: [1],
      explain: "Прямоугольник — процесс, то есть выполнение действия или вычисления. Ромб — условие, параллелограмм — ввод/вывод."
    },
    {
      topic: "programming", level: "A", type: "single",
      q: "Какая фигура блок-схемы обозначает ввод или вывод данных?",
      options: ["Ромб", "Прямоугольник", "Параллелограмм", "Овал"],
      correct: [2],
      explain: "Ввод и вывод данных показывают параллелограммом. Овал используют для начала и конца алгоритма."
    },
    {
      topic: "programming", level: "A", type: "single",
      q: "Свойство алгоритма, означающее, что он состоит из отдельных законченных шагов:",
      options: ["Дискретность", "Массовость", "Результативность", "Детерминированность"],
      correct: [0],
      explain: "Дискретность — алгоритм разбит на отдельные шаги, каждый из которых выполняется за конечное время."
    },
    {
      topic: "programming", level: "A", type: "single",
      q: "Свойство алгоритма, означающее, что при одних и тех же исходных данных получается один и тот же результат:",
      options: ["Дискретность", "Детерминированность", "Массовость", "Наглядность"],
      correct: [1],
      explain: "Детерминированность — определённость: исполнитель при одинаковых данных всегда получает одинаковый результат."
    },
    {
      topic: "programming", level: "A", type: "single",
      q: "Алгоритм — это:",
      options: [
        "Точная конечная последовательность действий для решения задачи",
        "Любая программа на языке программирования",
        "Набор данных для обработки",
        "Устройство хранения информации"
      ],
      correct: [0],
      explain: "Алгоритм — точное и конечное предписание исполнителю о последовательности действий, приводящей к решению задачи."
    },
    {
      topic: "programming", level: "A", type: "single",
      q: "Каким знаком в блок-схеме обозначают условие «не равно»?",
      options: ["=", "≠", "≥", "≤"],
      correct: [1],
      explain: "«Не равно» обозначают знаком ≠. В языках программирования ему соответствуют != (Python, JavaScript) или <> (Pascal, SQL)."
    },
    {
      topic: "programming", level: "A", type: "single",
      q: "Переменная — это:",
      options: [
        "Именованная область памяти для хранения значения",
        "Команда вывода на экран",
        "Постоянная величина, которую нельзя изменить",
        "Тип файла"
      ],
      correct: [0],
      explain: "Переменная имеет имя и хранит значение, которое можно изменить во время работы программы. Константа, в отличие от неё, не меняется."
    },
    {
      topic: "programming", level: "A", type: "single",
      q: "Какой тип данных в Python имеет значение 3.14?",
      options: ["int", "float", "str", "bool"],
      correct: [1],
      explain: "Число с дробной частью относится к типу float. int — целые числа, str — строки, bool — логические значения True/False."
    },
    {
      topic: "programming", level: "A", type: "single",
      q: "Какой тип данных в Python имеет значение \"42\" (в кавычках)?",
      options: ["int", "float", "str", "bool"],
      correct: [2],
      explain: "Кавычки делают значение строкой, поэтому это str, а не число. Чтобы получить число, нужно int(\"42\")."
    },
    {
      topic: "programming", level: "B", type: "single",
      q: "Чем компилятор отличается от интерпретатора?",
      options: [
        "Компилятор переводит всю программу целиком, интерпретатор выполняет её по строкам",
        "Компилятор ищет ошибки в тексте, интерпретатор запускает программу",
        "Компилятор работает только с Python, интерпретатор — с любыми языками",
        "Между ними нет разницы"
      ],
      correct: [0],
      explain: "Компилятор сначала переводит всю программу в машинный код, а интерпретатор разбирает и выполняет её по частям во время работы."
    },
    {
      topic: "programming", level: "B", type: "single",
      q: "Трассировка алгоритма — это:",
      options: [
        "Пошаговое выполнение алгоритма с записью значений переменных",
        "Автоматический перевод кода в машинный код",
        "Поиск синтаксических ошибок",
        "Сортировка массива"
      ],
      correct: [0],
      explain: "При трассировке вручную или в отладчике проходят по шагам и фиксируют, как меняются значения переменных — так проверяют логику алгоритма."
    },
    {
      topic: "programming", level: "A", type: "single",
      q: "Рекурсия — это:",
      options: [
        "Вызов функцией самой себя",
        "Цикл, который никогда не заканчивается",
        "Копирование массива",
        "Обработка ошибок"
      ],
      correct: [0],
      explain: "Рекурсивная функция вызывает саму себя с изменённым аргументом. Обязательно нужен базовый случай, иначе будет бесконечная рекурсия."
    },
    {
      topic: "programming", level: "A", type: "single",
      q: "Вложенный цикл — это:",
      options: [
        "Цикл, расположенный внутри другого цикла",
        "Цикл без условия",
        "Цикл, который выполняется один раз",
        "Условный оператор"
      ],
      correct: [0],
      explain: "Внутренний цикл выполняется полностью при каждом проходе внешнего. Общее число повторений равно произведению количества проходов."
    },
    {
      topic: "programming", level: "B", type: "single",
      q: "Линейный поиск элемента в массиве — это:",
      options: [
        "Последовательный перебор элементов до совпадения",
        "Деление массива пополам на каждом шаге",
        "Сортировка массива",
        "Суммирование всех элементов"
      ],
      correct: [0],
      explain: "Линейный (последовательный) поиск проверяет элементы по одному с начала массива. Бинарный поиск делит отсортированный массив пополам и работает быстрее."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Что делает выражение sorted(A, reverse=True)?",
      options: [
        "Сортирует элементы по убыванию",
        "Сортирует элементы по возрастанию",
        "Переворачивает массив",
        "Удаляет повторяющиеся элементы"
      ],
      correct: [0],
      explain: "reverse=True меняет направление сортировки на убывание. Без этого параметра sorted() сортирует по возрастанию."
    },
    {
      topic: "programming", level: "A", type: "single",
      q: "Индекс элемента массива — это:",
      options: ["Номер элемента в массиве", "Значение элемента", "Длина массива", "Тип данных элемента"],
      correct: [0],
      explain: "Индекс — порядковый номер элемента. В Python и JavaScript нумерация начинается с 0, в Pascal — с 1."
    },
    {
      topic: "programming", lang: "Python", level: "A", type: "single",
      q: "Чем является запись A = [1, 2, 3] в Python?",
      options: ["Списком", "Строкой", "Кортежем", "Словарём"],
      correct: [0],
      explain: "Квадратные скобки создают список (list). Кортеж записывают в круглых скобках, словарь — в фигурных."
    },

    /* ---------- PROGRAMMING · HTML ---------- */
    {
      topic: "programming", lang: "HTML", level: "A", type: "single",
      q: "Тег для вывода текста в виде нижнего индекса:",
      options: ["<sup>", "<sub>", "<i>", "<b>"],
      correct: [1],
      explain: "<sub> делает нижний индекс (например, H<sub>2</sub>O), <sup> — верхний. <i> и <b> задают начертание."
    },
    {
      topic: "programming", lang: "HTML", level: "A", type: "single",
      q: "Тег для вывода текста в виде верхнего индекса:",
      options: ["<sub>", "<sup>", "<u>", "<p>"],
      correct: [1],
      explain: "<sup> поднимает текст вверх (например, x<sup>2</sup>), <sub> опускает вниз."
    },
    {
      topic: "programming", lang: "HTML", level: "A", type: "single",
      q: "Какой тег вставляет изображение на страницу?",
      options: ["<image>", "<img>", "<pic>", "<src>"],
      correct: [1],
      explain: "Стандартный тег для изображения — <img> с атрибутом src, где указан путь к файлу. Тега <pic> в HTML нет."
    },
    {
      topic: "programming", lang: "HTML", level: "A", type: "single",
      q: "Для чего нужен атрибут alt у тега <img>?",
      options: [
        "Задаёт альтернативный текст, если изображение не загрузилось",
        "Указывает путь к изображению",
        "Задаёт ширину изображения",
        "Делает изображение ссылкой"
      ],
      correct: [0],
      explain: "alt показывает текстовое описание вместо картинки и озвучивается программами для незрячих. Путь задаёт src, размеры — width и height."
    },
    {
      topic: "programming", lang: "HTML", level: "A", type: "single",
      q: "Какой тег создаёт гиперссылку?",
      options: ['<a href="page.html">', "<link>", "<href>", "<url>"],
      correct: [0],
      explain: "Ссылку создаёт тег <a>, а адрес указывают в атрибуте href. Тег <link> подключает внешние ресурсы, например CSS."
    },
    {
      topic: "programming", lang: "HTML", level: "A", type: "single",
      q: "Какой тег выполняет перенос строки?",
      options: ["<br>", "<p>", "<hr>", "<line>"],
      correct: [0],
      explain: "<br> переносит текст на новую строку. <p> создаёт абзац, <hr> — горизонтальную линию."
    },
    {
      topic: "programming", lang: "HTML", level: "A", type: "single",
      q: "Какой тег создаёт маркированный (ненумерованный) список?",
      options: ["<ol>", "<ul>", "<li>", "<dl>"],
      correct: [1],
      explain: "<ul> — маркированный список, <ol> — нумерованный, <li> — отдельный пункт списка."
    },
    {
      topic: "programming", lang: "HTML", level: "A", type: "single",
      q: "Какой тег задаёт заголовок первого уровня?",
      options: ["<h1>", "<h6>", "<head>", "<title>"],
      correct: [0],
      explain: "<h1> — самый крупный заголовок, <h6> — самый мелкий. <head> — служебный раздел документа, <title> — название вкладки."
    },

    /* ---------- PROGRAMMING · SQL ---------- */
    {
      topic: "programming", lang: "SQL", level: "A", type: "single",
      q: "Что делает SQL-запрос SELECT * FROM Мектеп?",
      options: [
        "Показывает поля таблицы в отсортированном виде",
        "Выводит все поля таблицы",
        "Выводит записи таблицы в отсортированном виде",
        "Выводит поле Мектеп"
      ],
      correct: [1],
      explain: "Звёздочка * означает «все поля». Запрос выводит все столбцы таблицы Мектеп, но не сортирует их."
    },
    {
      topic: "programming", lang: "SQL", level: "A", type: "single",
      q: "Название таблицы в команде INSERT INTO t1 VALUES (v1, v2);",
      options: ["VALUES", "v1, v2", "t1", "INSERT INTO"],
      correct: [2],
      explain: "После INSERT INTO указывают таблицу — здесь это t1. VALUES задаёт значения, v1 и v2 — сами значения."
    },
    {
      topic: "programming", lang: "SQL", level: "A", type: "single",
      q: "Какая команда SQL отбирает записи по условию?",
      options: ["SELECT", "WHERE", "ORDER BY", "INSERT"],
      correct: [1],
      explain: "WHERE задаёт условие отбора строк. SELECT выбирает поля, ORDER BY сортирует, INSERT добавляет записи."
    },
    {
      topic: "programming", lang: "SQL", level: "A", type: "single",
      q: "Какая команда SQL сортирует результат запроса?",
      options: ["WHERE", "GROUP BY", "ORDER BY", "FROM"],
      correct: [2],
      explain: "ORDER BY сортирует результат по указанному полю. По умолчанию — по возрастанию, DESC — по убыванию."
    },
    {
      topic: "programming", lang: "SQL", level: "B", type: "multi",
      q: "Выберите верные утверждения о PRIMARY KEY (первичном ключе):",
      options: [
        "Должен однозначно идентифицировать каждую строку таблицы",
        "Не может содержать значение NULL",
        "Может содержать значение NULL",
        "В таблице может быть только один первичный ключ, состоящий из одного или нескольких полей",
        "Может содержать повторяющиеся значения",
        "В таблице может быть несколько первичных ключей"
      ],
      correct: [0, 1, 3],
      explain: "Первичный ключ уникален, не бывает пустым (NULL) и в таблице он один — но может состоять из нескольких полей (составной ключ)."
    },
    {
      topic: "programming", lang: "SQL", level: "A", type: "single",
      q: "Реляционная база данных — это:",
      options: [
        "Совокупность взаимосвязанных таблиц",
        "Набор текстовых файлов",
        "Иерархия папок и файлов",
        "Список сетевых адресов"
      ],
      correct: [0],
      explain: "В реляционной модели данные хранятся в таблицах (отношениях), связанных ключами. Строка — запись, столбец — поле."
    },

    /* ---------- PROGRAMMING · JAVASCRIPT ---------- */
    {
      topic: "programming", lang: "JavaScript", level: "A", type: "single",
      q: "Какой командой в JavaScript вывести текст «Привет, мир!» в окне предупреждения?",
      options: ['alert("Привет, мир!");', 'prompt("Привет, мир!");', 'console.log("Привет, мир!");', 'msg("Привет, мир!");'],
      correct: [0],
      explain: "alert() показывает модальное окно с сообщением. prompt() запрашивает ввод, console.log() пишет в консоль."
    },
    {
      topic: "programming", lang: "JavaScript", level: "A", type: "single",
      q: "Куда выводит сообщение команда console.log()?",
      options: ["В консоль разработчика", "В окно предупреждения", "В заголовок страницы", "В адресную строку"],
      correct: [0],
      explain: "console.log() печатает значение в консоль браузера — это основной способ отладки."
    },
    {
      topic: "programming", lang: "JavaScript", level: "A", type: "single",
      q: "Что возвращает document.getElementById(\"demo\")?",
      options: [
        "Элемент страницы с id=\"demo\"",
        "Текст элемента с id=\"demo\"",
        "Все элементы с классом demo",
        "Новую страницу"
      ],
      correct: [0],
      explain: "getElementById ищет на странице элемент по атрибуту id и возвращает его. Если элемента нет, вернётся null."
    },
    {
      topic: "programming", lang: "JavaScript", level: "A", type: "single",
      q: "Для чего используют addEventListener?",
      options: [
        "Чтобы назначить обработчик события элементу",
        "Чтобы создать новый массив",
        "Чтобы изменить стиль элемента",
        "Чтобы объявить переменную"
      ],
      correct: [0],
      explain: "addEventListener подписывает элемент на событие (click, keydown и т. д.) и вызывает функцию, когда событие произошло."
    },
    {
      topic: "programming", lang: "JavaScript", level: "A", type: "single",
      q: "Что хранит свойство length у массива?",
      options: ["Количество элементов", "Индекс последнего элемента", "Первый элемент", "Сумму элементов"],
      correct: [0],
      explain: "length — количество элементов массива. Последний индекс при этом равен length − 1, потому что индексация начинается с 0."
    },
    {
      topic: "programming", lang: "JavaScript", level: "A", type: "single",
      q: "Какими словами в современном JavaScript объявляют переменные?",
      options: ["let и const", "var и int", "dim и def", "new и this"],
      correct: [0],
      explain: "let объявляет изменяемую переменную, const — константу. Старое слово var тоже работает, но используется реже."
    },

    /* ---------- АКАДЕМИЧЕСКИЕ ФОРМУЛИРОВКИ ---------- */
    {
      topic: "hardware", level: "B", type: "single", wording: true,
      q: "Формирует и подаёт управляющие сигналы, обусловленные спецификой выполняемой операции.",
      options: ["Устройство управления (CU)", "Арифметико-логическое устройство (ALU)", "Регистр", "Кэш-память"],
      correct: [0],
      explain: "Это устройство управления (Control Unit). Оно координирует работу процессора и формирует управляющие сигналы, а вычисления выполняет ALU."
    },
    {
      topic: "hardware", level: "B", type: "single", wording: true,
      q: "Выполняет арифметические и логические операции над данными.",
      options: ["Устройство управления", "Арифметико-логическое устройство", "Регистр", "Кэш-память"],
      correct: [1],
      explain: "Арифметико-логическое устройство (ALU) выполняет сложение, вычитание, сравнения и логические операции."
    },
    {
      topic: "hardware", level: "B", type: "single", wording: true,
      q: "Предназначены для временного хранения данных, промежуточных результатов и адресов, используемых процессором при выполнении команд.",
      options: ["Регистры процессора", "Кэш-память", "Оперативная память", "Постоянная память"],
      correct: [0],
      explain: "Регистры — сверхбыстрая внутренняя память процессора. Кэш тоже ускоряет доступ, но это отдельная память между ядром и RAM."
    },
    {
      topic: "hardware", level: "B", type: "single", wording: true,
      q: "Высокоскоростная память, предназначенная для сокращения времени обращения процессора к оперативной памяти.",
      options: ["Кэш-память", "ROM", "SSD", "Видеопамять"],
      correct: [0],
      explain: "Кэш хранит часто используемые данные и инструкции рядом с процессором. Уровни L1–L3 различаются скоростью и объёмом."
    },
    {
      topic: "software", level: "B", type: "single", wording: true,
      q: "Обеспечивает взаимодействие операционной системы с конкретным аппаратным устройством.",
      options: ["Драйвер", "Утилита", "Компилятор", "Браузер"],
      correct: [0],
      explain: "Драйвер — программное обеспечение, которое объясняет ОС, как работать с устройством. Сам по себе он не является аппаратным компонентом."
    },
    {
      topic: "software", level: "B", type: "single", wording: true,
      q: "Преобразует весь исходный код программы в машинный код до её выполнения.",
      options: ["Интерпретатор", "Компилятор", "Отладчик", "Редактор кода"],
      correct: [1],
      explain: "Компилятор переводит всю программу заранее. Интерпретатор выполняет код по мере разбора. Оба относятся к трансляторам."
    },
    {
      topic: "software", level: "B", type: "single", wording: true,
      q: "Выполняет исходный код по мере разбора, не создавая отдельного исполняемого файла.",
      options: ["Компилятор", "Интерпретатор", "Архиватор", "Драйвер"],
      correct: [1],
      explain: "Интерпретатор разбирает и выполняет код последовательно. Компилятор создаёт машинный код до запуска."
    },
    {
      topic: "protocols", level: "A", type: "single", wording: true,
      q: "Осуществляет преобразование доменного имени в соответствующий IP-адрес.",
      options: ["DHCP", "DNS", "NAT", "FTP"],
      correct: [1],
      explain: "DNS сопоставляет имя сайта и IP-адрес. DHCP выдаёт настройки, NAT преобразует адреса, FTP передаёт файлы."
    },
    {
      topic: "protocols", level: "A", type: "single", wording: true,
      q: "Обеспечивает автоматическое назначение IP-адресов устройствам сети.",
      options: ["DNS", "DHCP", "ICMP", "SMTP"],
      correct: [1],
      explain: "DHCP автоматически выдаёт IP, маску, шлюз и DNS. Этапы: Discover, Offer, Request, Ack."
    },
    {
      topic: "security", level: "A", type: "single", wording: true,
      q: "Ограничивает доступ к сети на основе заданных правил безопасности.",
      options: ["Антивирус", "Межсетевой экран (Firewall)", "Архиватор", "Драйвер"],
      correct: [1],
      explain: "Firewall фильтрует сетевые соединения по правилам. Антивирус проверяет файлы и поведение программ."
    },
    {
      topic: "equipment", level: "A", type: "single", wording: true,
      q: "Передаёт пакеты данных между различными сетями на основе IP-адресации.",
      options: ["Коммутатор", "Маршрутизатор", "Концентратор", "Повторитель"],
      correct: [1],
      explain: "Маршрутизатор (router) работает с IP-адресами и выбирает маршрут между сетями. Коммутатор использует MAC-адреса внутри локальной сети."
    },
    {
      topic: "equipment", level: "B", type: "single", wording: true,
      q: "Устройство, предназначенное для соединения нескольких компьютеров в локальной сети, которое анализирует MAC-адреса полученных кадров и передаёт их соответствующему сетевому порту.",
      options: ["Концентратор (Hub)", "Коммутатор (Switch)", "Маршрутизатор (Router)", "Модем"],
      correct: [1],
      explain: "Это коммутатор. Hub просто повторяет сигнал всем портам, router работает с IP, modem преобразует сигналы линии связи."
    },
    {
      topic: "protocols", level: "B", type: "single", wording: true,
      q: "Протокол транспортного уровня, обеспечивающий установление соединения, контроль доставки данных и сохранение порядка передачи сегментов.",
      options: ["UDP", "TCP", "IP", "ICMP"],
      correct: [1],
      explain: "TCP устанавливает соединение, подтверждает доставку и сохраняет порядок. UDP этих гарантий не даёт."
    },
    {
      topic: "protocols", level: "B", type: "single", wording: true,
      q: "Позволяет устройствам частной сети выходить в интернет через один публичный IPv4-адрес.",
      options: ["DNS", "DHCP", "NAT", "VLAN"],
      correct: [2],
      explain: "NAT (Network Address Translation) подменяет частные адреса на публичный адрес маршрутизатора при выходе в интернет."
    },
    {
      topic: "hardware", level: "B", type: "single", wording: true,
      q: "Предназначена для хранения инструкций и данных, необходимых для запуска компьютера.",
      options: ["Оперативная память", "Постоянная память (ROM)", "Кэш-память", "Видеопамять"],
      correct: [1],
      explain: "Речь о постоянной памяти и прошивке (BIOS/UEFI). RAM теряет содержимое при выключении и не хранит программу запуска постоянно."
    },
    {
      topic: "hardware", level: "A", type: "single", wording: true,
      q: "Энергонезависимый накопитель, не содержащий движущихся частей и обычно работающий быстрее жёсткого диска.",
      options: ["HDD", "SSD", "DVD-RW", "RAM"],
      correct: [1],
      explain: "SSD построен на флеш-памяти и не имеет механических частей. HDD использует вращающиеся пластины."
    },

    /* ---------- СЕТИ: ПРИНАДЛЕЖНОСТЬ, СКОРОСТЬ, ОБЛАКА ---------- */
    {
      topic: "networks", level: "A", type: "single", wording: true,
      q: "Принадлежит одной организации или учреждению и обслуживает его внутренние задачи.",
      options: ["Ведомственная сеть", "Государственная сеть", "Глобальная сеть", "Одноранговая сеть"],
      correct: [0],
      explain: "Ведомственная сеть принадлежит одной организации: банку, железнодорожным кассам, театральным кассам. Государственная принадлежит государственным структурам."
    },
    {
      topic: "networks", level: "A", type: "single", wording: true,
      q: "Принадлежит государственным структурам, например органам внутренних дел или таможенной службе.",
      options: ["Ведомственная сеть", "Государственная сеть", "Корпоративная сеть", "Частная сеть"],
      correct: [1],
      explain: "Это государственная сеть. Ведомственная принадлежит одной организации, государственная — государственным органам."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Сеть с пропускной способностью около 50 Мбит/с по классификации из учебника относят к…",
      options: ["Низкоскоростным", "Среднескоростным", "Высокоскоростным", "Сверхвысокоскоростным"],
      correct: [1],
      explain: "По этой классификации: до 10 Мбит/с — низкоскоростные, до 100 Мбит/с — среднескоростные, до 1 Гбит/с — высокоскоростные, до 10 Гбит/с — сверхвысокоскоростные. Границы условны."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Сеть с пропускной способностью около 5 Гбит/с по классификации из учебника относят к…",
      options: ["Низкоскоростным", "Среднескоростным", "Высокоскоростным", "Сверхвысокоскоростным"],
      correct: [3],
      explain: "5 Гбит/с меньше верхней границы 10 Гбит/с, поэтому это сверхвысокоскоростная сеть. Современные сети могут быть ещё быстрее — классификация условная."
    },
    {
      topic: "networks", level: "A", type: "single", wording: true,
      q: "Инфраструктура облачных вычислений, предназначенная для работы только одного предприятия и размещённая на его серверах.",
      options: ["Частное облако", "Публичное облако", "Гибридное облако", "Общественное облако"],
      correct: [0],
      explain: "Частное облако (private cloud) обслуживает одно предприятие. Публичное доступно широкой публике, гибридное объединяет типы облаков."
    },
    {
      topic: "networks", level: "A", type: "single", wording: true,
      q: "Инфраструктура облачных вычислений, доступная широкой публике через интернет.",
      options: ["Частное облако", "Публичное облако", "Гибридное облако", "Общественное облако"],
      correct: [1],
      explain: "Публичное облако (public cloud) предоставляет сервисы широкой аудитории: Google Drive, Microsoft 365, iCloud."
    },
    {
      topic: "networks", level: "B", type: "single", wording: true,
      q: "Комбинация двух или более типов облаков, например частного и публичного.",
      options: ["Частное облако", "Публичное облако", "Гибридное облако", "Общественное облако"],
      correct: [2],
      explain: "Гибридное облако (hybrid cloud) объединяет разные модели: часть данных и сервисов остаётся в частном облаке, часть — в публичном."
    },
    {
      topic: "networks", level: "B", type: "single", wording: true,
      q: "Инфраструктура облачных вычислений для общественных потребителей с общими целями.",
      options: ["Частное облако", "Публичное облако", "Гибридное облако", "Общественное облако"],
      correct: [3],
      explain: "Общественное облако (community cloud) совместно используют организации с общими задачами и требованиями."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Скорость канала q = 100 Мбит/с, время передачи t = 10 с. Какой объём данных передан?",
      options: ["10 Мбит", "110 Мбит", "1000 Мбит", "10 000 Мбит"],
      correct: [2],
      explain: "Q = q · t = 100 · 10 = 1000 Мбит. Это 1000 / 8 = 125 МБ."
    },
    {
      topic: "networks", level: "A", type: "single",
      q: "Сколько бит содержится в одном байте?",
      options: ["4 бита", "8 бит", "16 бит", "1024 бита"],
      correct: [1],
      explain: "1 байт = 8 бит. Дальше: 1 Кбайт = 1024 байта, 1 Мбайт = 1024 Кбайта."
    },
    {
      topic: "networks", level: "A", type: "single", wording: true,
      q: "Объём информации, передаваемой через компьютерную сеть за определённый период времени.",
      options: ["Пропускная способность", "Интернет-трафик", "Пакет", "Кадр"],
      correct: [1],
      explain: "Интернет-трафик — объём переданной информации за период. Пропускная способность — количество информации в единицу времени."
    },
    {
      topic: "networks", level: "A", type: "single", wording: true,
      q: "Сервер, который хранит файлы и предоставляет к ним общий доступ.",
      options: ["Файл-сервер", "Принт-сервер", "Факс-сервер", "Сервер приложений"],
      correct: [0],
      explain: "Файл-сервер хранит общие файлы. Принт-сервер обслуживает печать, сервер приложений выполняет программы для клиентов."
    },
    {
      topic: "networks", level: "A", type: "single", wording: true,
      q: "Сервер, который обслуживает общий сетевой принтер и очередь печати.",
      options: ["Файл-сервер", "Принт-сервер", "Почтовый сервер", "Сервер служб каталогов"],
      correct: [1],
      explain: "Принт-сервер принимает задания печати и передаёт их общему принтеру. Файл-сервер хранит файлы, почтовый — обрабатывает письма."
    },
    {
      topic: "networks", level: "B", type: "single", wording: true,
      q: "Сервер, который централизованно хранит учётные записи пользователей и ресурсы каталога.",
      options: ["Файл-сервер", "Принт-сервер", "Сервер служб каталогов", "Коммуникационный сервер"],
      correct: [2],
      explain: "Сервер служб каталогов хранит учётные записи и структуру каталога. Пример — контроллер домена Active Directory."
    },
    {
      topic: "equipment", level: "A", type: "single", wording: true,
      q: "Отрезок кабеля с разъёмами на обоих концах для подключения устройства к порту или розетке.",
      options: ["Патч-корд", "Коаксиальный кабель", "Оптоволокно", "Кабель питания"],
      correct: [0],
      explain: "Патч-корд — готовый отрезок витой пары или оптоволокна с разъёмами. Им соединяют компьютер с розеткой, коммутатором или панелью."
    },
    {
      topic: "networks", level: "A", type: "single", wording: true,
      q: "Компьютер, подключённый к сети и использующий её ресурсы.",
      options: ["Рабочая станция", "Сервер", "Коммутатор", "Модем"],
      correct: [0],
      explain: "Рабочая станция — компьютер пользователя, подключённый к сети. Сервер предоставляет ресурсы, коммутатор передаёт кадры, модем преобразует сигналы."
    },
    {
      topic: "networks", level: "B", type: "multi",
      q: "Какие параметры характеризуют эффективную работу компьютерной сети?",
      options: ["Пропускная способность", "Надёжность", "Стоимость подключения", "Диагональ монитора", "Цвет корпуса"],
      correct: [0, 1, 2],
      explain: "Эффективность сети оценивают по пропускной способности, надёжности и стоимости подключения. Диагональ монитора и цвет корпуса к сети не относятся."
    },

    /* ---------- СЕТИ: КАБЕЛИ, БЕСПРОВОДНЫЕ КАНАЛЫ, МОБИЛЬНЫЕ ПОКОЛЕНИЯ ---------- */
    {
      topic: "networks", level: "A", type: "single", wording: true,
      q: "Кабель из скрученных попарно изолированных проводников, самый распространённый в локальных сетях.",
      options: ["Витая пара", "Коаксиальный кабель", "Оптоволоконный кабель", "Патч-корд"],
      correct: [0],
      explain: "Витая пара: скрутка пар снижает помехи, кабель дешёвый и простой в монтаже. Скорость до 1000 Мбит/с, длина до 100 м."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Скорость передачи данных по коаксиальному кабелю по учебным данным.",
      options: ["До 10 Мбит/с", "50–100 Мбит/с", "До 1000 Мбит/с", "До 3 Гбит/с"],
      correct: [1],
      explain: "Коаксиал даёт 50–100 Мбит/с и работает на расстоянии до нескольких километров. Витая пара — до 1000 Мбит/с, оптоволокно по учебнику — до 3 Гбит/с."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Длина линии связи коаксиального кабеля.",
      options: ["До 10 м", "До 100 м", "До нескольких километров", "Без ограничений"],
      correct: [2],
      explain: "Коаксиальный кабель работает на расстоянии до нескольких километров, поэтому исторически применялся в протяжённых сетях и кабельном телевидении."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Скорость передачи данных по оптоволоконному кабелю по учебным данным.",
      options: ["До 10 Мбит/с", "До 100 Мбит/с", "До 1 Гбит/с", "До 3 Гбит/с"],
      correct: [3],
      explain: "В учебнике указано до 3 Гбит/с. Современное оптоволокно быстрее, но для экзамена ориентируйся на это значение."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Радиосвязь свободного радиочастотного диапазона действует на расстоянии до … со скоростью 11–54 Мбит/с.",
      options: ["10 м", "100 м", "1 км", "10 км"],
      correct: [1],
      explain: "До 100 м, 11–54 Мбит/с. Сигнал передаётся сразу на нескольких частотах."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Скорость передачи инфракрасных лазеров.",
      options: ["5–10 Мбит/с", "11–54 Мбит/с", "До 100 Мбит/с", "До 1 Гбит/с"],
      correct: [2],
      explain: "Инфракрасные лазеры передают до 100 Мбит/с в пределах когерентных микролучей. Микроволновое излучение — 5–10 Мбит/с."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Ширина канала микроволнового излучения.",
      options: ["До 10 МГц", "До 25 МГц", "До 50 МГц", "До 100 МГц"],
      correct: [3],
      explain: "Микроволновое излучение: 5–10 Мбит/с и ширина канала до 100 МГц."
    },
    {
      topic: "networks", level: "A", type: "single",
      q: "Радиус действия одной точки доступа Wi-Fi в квартирах и офисах.",
      options: ["До 10 м", "До 100 м", "До 500 м", "До 1 км"],
      correct: [0],
      explain: "В помещении сигнал ослабляют стены и мебель, поэтому радиус около 10 м. При прямой видимости — до 100 м."
    },
    {
      topic: "networks", level: "A", type: "single",
      q: "Радиус действия Wi-Fi при прямой видимости.",
      options: ["До 10 м", "До 100 м", "До 1 км", "До 10 км"],
      correct: [1],
      explain: "До 100 м при прямой видимости и до 10 м в квартирах и офисах."
    },
    {
      topic: "networks", level: "A", type: "single",
      q: "Поколение мобильной связи, которое обеспечивало только голосовую беспроводную связь.",
      options: ["1G", "2G", "3G", "4G"],
      correct: [0],
      explain: "1G — только голос. 2G добавило цифровой сигнал, шифрование и передачу текста."
    },
    {
      topic: "networks", level: "A", type: "single",
      q: "Поколение мобильной связи, которое дало доступ в интернет и пакетную передачу данных.",
      options: ["1G", "2G", "3G", "5G"],
      correct: [2],
      explain: "3G — доступ в интернет и пакетная передача. 4G сделало мобильный интернет быстрым, 5G добавило низкую задержку и плотность подключений."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Плотность подключения устройств в сети 5G.",
      options: ["10 тыс. устройств/км²", "100 тыс. устройств/км²", "500 тыс. устройств/км²", "1 млн устройств/км²"],
      correct: [3],
      explain: "5G — до 1 млн устройств на км², 4G — 100 тыс. на км²."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Скорость загрузки для пользователей 4G по учебным данным.",
      options: ["10 Мбит/с", "50 Мбит/с", "100 Мбит/с", "1 Гбит/с"],
      correct: [0],
      explain: "4G — около 10 Мбит/с, 5G — около 100 Мбит/с. Это учебные ориентиры, реальные скорости зависят от оператора и условий."
    },
    {
      topic: "networks", level: "A", type: "single", wording: true,
      q: "Адрес, отправив данные на который их получат все устройства сети сразу.",
      options: ["Широковещательный адрес", "Адрес сети", "Частный адрес", "Адрес шлюза"],
      correct: [0],
      explain: "Broadcast — последний адрес подсети, все биты хостовой части равны единице. Для 192.168.1.0/24 это 192.168.1.255."
    },
    {
      topic: "networks", level: "C", type: "single",
      q: "Сколько компьютеров можно адресовать в подсети с маской /26?",
      options: ["30", "62", "64", "126"],
      correct: [1],
      explain: "K = 2^n − 2. У /26 шесть нулей: 2^6 − 2 = 62. Ещё два адреса — сеть и broadcast."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Адрес сети для узла 192.168.10.130/24.",
      options: ["192.168.10.0", "192.168.10.1", "192.168.10.130", "192.168.10.255"],
      correct: [0],
      explain: "Применяем побитовое И с маской 255.255.255.0: хостовая часть обнуляется, получается 192.168.10.0."
    },
    {
      topic: "networks", level: "A", type: "single", wording: true,
      q: "Адрес назначается вручную и не меняется при перезагрузке устройства или роутера.",
      options: ["Статический IP", "Динамический IP", "Частный IP", "Публичный IP"],
      correct: [0],
      explain: "Статический адрес задают вручную, он удобен для серверов и принтеров. Динамический выдаёт DHCP и он может меняться."
    },
    {
      topic: "networks", level: "A", type: "single", wording: true,
      q: "Адрес выдаётся автоматически DHCP-сервером и может меняться при каждом подключении.",
      options: ["Статический IP", "Динамический IP", "Широковещательный адрес", "Адрес сети"],
      correct: [1],
      explain: "Динамический IP выдаёт DHCP. Именно так телефон получает адрес при подключении к Wi-Fi."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Максимальная длина одной части доменного имени между точками.",
      options: ["32 символа", "63 символа", "128 символов", "255 символов"],
      correct: [1],
      explain: "Одна часть имени — до 63 символов, всё имя целиком с поддоменами и зоной — до 255 символов."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Максимальная общая длина доменного имени с поддоменами и зоной.",
      options: ["63 символа", "128 символов", "200 символов", "255 символов"],
      correct: [3],
      explain: "Общая длина — до 255 знаков, включая поддомены, разделительные точки и имя зоны."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Средняя пропускная способность сети в Казахстане по учебным данным.",
      options: ["1–5 Мбит/с", "12–17 Мбит/с", "50–70 Мбит/с", "100–150 Мбит/с"],
      correct: [1],
      explain: "В учебном пособии указано 12–17 Мбит/с. Это средний ориентир, а не технический предел."
    },
    {
      topic: "networks", level: "B", type: "multi",
      q: "Каким требованиям должна отвечать работающая сеть?",
      options: ["Доступность соединений", "Наличие правил-протоколов", "Список услуг одного компьютера для другого", "Единый цвет корпусов", "Наличие принтера"],
      correct: [0, 1, 2],
      explain: "Нужны работающие интерфейсы, протоколы взаимодействия и услуги. Цвет корпуса и наличие принтера к работе сети не относятся."
    },
    {
      topic: "networks", level: "A", type: "single", wording: true,
      q: "Служит для подключения компьютеров к каналам связи: сетевая карта, модемы, мосты, маршрутизаторы, шлюзы.",
      options: ["Канал связи", "Сетевой узел", "Аппаратура передачи данных", "Топология сети"],
      correct: [2],
      explain: "Это аппаратура передачи данных. Канал связи — сама среда (кабель, радиоволны), узел — устройство в сети."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Топология, которая является развитием «звезды» и использует несколько концентраторов.",
      options: ["Шина", "Кольцо", "Иерархическая (дерево)", "Ячеистая"],
      correct: [2],
      explain: "Иерархическая топология, или дерево: узлы верхнего уровня связаны с узлами нижнего. Удобна для многоуровневых организаций."
    },
    {
      topic: "networks", level: "B", type: "single", wording: true,
      q: "Использует общий кабель с терминаторами на концах, чтобы избежать отражения сигнала.",
      options: ["Шина", "Кольцо", "Звезда", "Ячеистая"],
      correct: [0],
      explain: "Терминаторы на концах общего кабеля — признак топологии «шина». При разрыве магистрали все компьютеры теряют связь."
    },
    {
      topic: "networks", level: "B", type: "single",
      q: "Сколько приёмников и передатчиков находится на каждой линии в топологии «кольцо»?",
      options: ["Два приёмника и два передатчика", "Несколько передатчиков", "Один приёмник и один передатчик", "Только центральный сервер"],
      correct: [2],
      explain: "В кольце на каждой линии один приёмник и один передатчик, поэтому внешние терминаторы не нужны."
    },

    /* ---------- УСТРОЙСТВО КОМПЬЮТЕРА И КОНФИГУРАЦИЯ ---------- */
    {
      topic: "hardware", level: "A", type: "single",
      q: "Что входит в базовую конфигурацию персонального компьютера?",
      options: ["Системный блок, монитор, клавиатура, мышь", "Системный блок, принтер, сканер, модем", "Монитор, принтер, клавиатура, мышь", "Процессор, RAM, SSD, GPU"],
      correct: [0],
      explain: "Базовая конфигурация — системный блок, монитор, клавиатура и мышь. Принтер, сканер и модем относятся к дополнительным устройствам."
    },
    {
      topic: "hardware", level: "A", type: "single", wording: true,
      q: "Принцип, по которому состав устройств может быть разным, но обязательный набор сохраняется, а компьютер можно модернизировать по частям.",
      options: ["Открытая архитектура", "Закрытая архитектура", "Клиент-сервер", "Магистральная архитектура"],
      correct: [0],
      explain: "Принцип открытой архитектуры: устройства могут различаться, но в любом ПК есть обязательный набор. Пользователь сам подключает дополнительные устройства и обновляет компоненты."
    },
    {
      topic: "hardware", level: "B", type: "single", wording: true,
      q: "Тип конфигурации, при которой один компонент ограничивает работу остальных.",
      options: ["Базовая", "Сбалансированная", "Несбалансированная", "Оптимальная"],
      correct: [2],
      explain: "Несбалансированная конфигурация: например, мощная видеокарта есть, но процессор не успевает подавать ей данные, и компьютер простаивает."
    },
    {
      topic: "hardware", level: "B", type: "single", wording: true,
      q: "Тип конфигурации — гармония между набором функциональных устройств и затратами на них.",
      options: ["Базовая", "Сбалансированная", "Несбалансированная", "Оптимальная"],
      correct: [3],
      explain: "Оптимальная конфигурация: устройства подобраны так, что их возможности соответствуют цене и реальным задачам."
    },
    {
      topic: "hardware", level: "B", type: "single",
      q: "Тип конфигурации, при которой процессор, память, видеокарта и шина обмена дают максимально быструю обработку для каждого типа задач.",
      options: ["Базовая", "Сбалансированная", "Несбалансированная", "Оптимальная"],
      correct: [1],
      explain: "Сбалансированная конфигурация: компоненты согласованы по производительности, поэтому нет узких мест и лишних задержек."
    },
    {
      topic: "hardware", level: "A", type: "single", wording: true,
      q: "Минимальный набор аппаратных и программных средств, достаточный для работы на компьютере.",
      options: ["Базовая конфигурация", "Сбалансированная конфигурация", "Несбалансированная конфигурация", "Оптимальная конфигурация"],
      correct: [0],
      explain: "Базовая конфигурация — необходимый минимум аппаратных и программных средств, без которого компьютер не будет работать."
    },
    {
      topic: "hardware", level: "A", type: "single",
      q: "Главное требование к офисному компьютеру.",
      options: ["Стабильность и непрерывность работы", "Максимальная частота видеокарты", "Большой объём VRAM", "Поддержка 3D-рендеринга"],
      correct: [0],
      explain: "Офисные ПК работают с документами и сетевыми приложениями, поэтому важнее надёжность и стабильность, а не высокая производительность."
    },
    {
      topic: "hardware", level: "B", type: "single",
      q: "Что является основой конфигурации игрового компьютера?",
      options: ["Мощная видеокарта, процессор и большой объём RAM", "Только большой жёсткий диск", "Только офисный процессор", "Сканер и принтер"],
      correct: [0],
      explain: "Игровой ПК отличается мощной графической подсистемой: видеокарта класса Radeon или GeForce, производительный процессор, большой объём RAM, джойстик, руль, педали."
    },
    {
      topic: "hardware", level: "B", type: "single",
      q: "Для чего предназначены дизайнерские ПК (графические станции)?",
      options: ["Для сложных графических приложений, обработки фото и видео", "Только для работы с текстом", "Только для бухгалтерских расчётов", "Только для печати документов"],
      correct: [0],
      explain: "Графические станции собирают под большие графические приложения, фото и видео. Для 3D нужна мощная видеокарта, для видеомонтажа — производительный процессор."
    },
    {
      topic: "hardware", level: "A", type: "single",
      q: "В каких единицах измеряется размер экрана монитора?",
      options: ["Дюйм, по диагонали экрана", "Пиксель", "Герц", "Бит"],
      correct: [0],
      explain: "Размер монитора измеряют в дюймах по диагонали экрана. Пиксели описывают разрешение, герцы — частоту обновления."
    },
    {
      topic: "hardware", level: "B", type: "single",
      q: "Чем определяется качество изображения на мониторе?",
      options: ["Количеством пикселей по горизонтали и вертикали", "Цветом корпуса", "Длиной кабеля", "Мощностью блока питания"],
      correct: [0],
      explain: "Чем больше пикселей по вертикали и горизонтали, тем выше разрешение и чётче изображение."
    },
    {
      topic: "hardware", level: "B", type: "single",
      q: "Стандартные размеры монитора по учебным данным.",
      options: ["10–13 дюймов", "14–21 дюйм", "24–32 дюйма", "40–50 дюймов"],
      correct: [1],
      explain: "В учебнике указаны размеры 14, 15, 17, 19, 20 и 21 дюйм; широко распространены 15 и 17, для графики эффективны 19–20."
    },
    {
      topic: "hardware", level: "B", type: "single",
      q: "Что показывает разрядность процессора?",
      options: ["Сколько бит данных он может принять и обработать в регистрах за один такт", "Количество ядер", "Объём кэш-памяти", "Частоту системной шины"],
      correct: [0],
      explain: "Разрядность — сколько бит данных процессор принимает и обрабатывает в своих регистрах за один такт. Это связано и с возможностями адресации памяти."
    },
    {
      topic: "hardware", level: "B", type: "single", wording: true,
      q: "Специализированный процессор, который дополняет основной, не имеет собственной программы и работает по его командам.",
      options: ["Сопроцессор", "Чипсет", "Контроллер памяти", "Блок питания"],
      correct: [0],
      explain: "Сопроцессор расширяет систему команд и регистров основного процессора, ускоряет арифметику и обработку графики, но системой не управляет."
    },
    {
      topic: "hardware", level: "A", type: "single",
      q: "Как расшифровывается BIOS?",
      options: ["Basic Input/Output System", "Binary Integrated Operating System", "Basic Internal Output Service", "Bus Input/Output Standard"],
      correct: [0],
      explain: "BIOS — Basic Input/Output System, базовая система ввода-вывода. Она расположена на материнской плате и настраивает системные параметры."
    },
    {
      topic: "hardware", level: "B", type: "single",
      q: "Что такое POST при включении компьютера?",
      options: ["Автоматическое тестирование оборудования", "Загрузка драйверов", "Создание файла подкачки", "Разгон процессора"],
      correct: [0],
      explain: "POST (Power-On Self-Test) — автоматическая проверка оборудования, которую BIOS выполняет при включении."
    },
    {
      topic: "hardware", level: "B", type: "multi",
      q: "Что выполняет BIOS?",
      options: ["Тестирование POST при включении", "Настройку параметров аппаратных средств", "Загрузку операционной системы с диска", "Обслуживание системных и аппаратных прерываний", "Рендеринг 3D-графики"],
      correct: [0, 1, 2, 3],
      explain: "BIOS тестирует оборудование, настраивает параметры, загружает ОС и обслуживает прерывания. 3D-графикой занимается GPU."
    },
    {
      topic: "hardware", level: "B", type: "single", wording: true,
      q: "Современный интерфейс прошивки, который заменил традиционный BIOS.",
      options: ["UEFI", "PCIe", "SATA", "CMOS"],
      correct: [0],
      explain: "UEFI — Unified Extensible Firmware Interface. Это не «версия BIOS», а отдельный современный интерфейс прошивки с мышью, быстрой загрузкой и обновлением через интернет."
    },
    {
      topic: "hardware", level: "B", type: "single", wording: true,
      q: "Набор микросхем на материнской плате, обеспечивающий обмен данными процессора с периферийными устройствами.",
      options: ["Чипсет", "Сопроцессор", "Контроллер прерываний", "Кэш-память"],
      correct: [0],
      explain: "Чипсет (chipset) — набор микросхем, который связывает процессор с периферией. Его тип входит в характеристики материнской платы."
    },
    {
      topic: "hardware", level: "B", type: "single", wording: true,
      q: "Шина, предназначенная для передачи адреса ячейки памяти или порта ввода-вывода.",
      options: ["Адресная шина", "Командная шина", "Шина данных", "Шина питания"],
      correct: [0],
      explain: "Адресная шина передаёт адрес. Шина данных передаёт сами данные, командная — управляющие сигналы."
    },
    {
      topic: "hardware", level: "B", type: "single", wording: true,
      q: "Шина, передающая управляющие сигналы, например «читать» или «записать».",
      options: ["Командная шина", "Адресная шина", "Шина данных", "Шина питания"],
      correct: [0],
      explain: "Командная (управляющая) шина передаёт сигналы управления. В демонстрации выше она идёт второй — после адреса."
    },
    {
      topic: "hardware", level: "B", type: "single",
      q: "Какой современный слот пришёл на смену AGP для видеокарт?",
      options: ["PCIe", "ISA", "AMR", "CNR"],
      correct: [0],
      explain: "AGP был слотом для видеокарт, но его заменил PCI Express (PCIe). ISA, AMR и CNR — устаревшие или исторические разъёмы."
    },
    {
      topic: "hardware", level: "A", type: "single",
      q: "Для чего предназначен слот AGP?",
      options: ["Для видеокарты", "Для модема", "Для принтера", "Для модуля оперативной памяти"],
      correct: [0],
      explain: "AGP (Accelerated Graphics Port) — устаревший слот для видеокарты. Сегодня видеокарты ставят в PCIe."
    },
    {
      topic: "hardware", level: "B", type: "single",
      q: "Какое напряжение подаётся по жёлтому проводу блока питания?",
      options: ["+12 В", "+5 В", "0 В", "−12 В"],
      correct: [0],
      explain: "Жёлтый провод — +12 В, красный — +5 В, чёрный — 0 В (земля)."
    },
    {
      topic: "hardware", level: "B", type: "single",
      q: "Какое напряжение подаётся по красному проводу блока питания?",
      options: ["+5 В", "+12 В", "0 В", "+3,3 В"],
      correct: [0],
      explain: "Красный провод — +5 В. Жёлтый — +12 В, чёрный — 0 В."
    },
    {
      topic: "hardware", level: "B", type: "multi",
      q: "На какие группы делят внешние устройства по назначению?",
      options: ["Ввода", "Вывода", "Хранения", "Обмена информацией", "Обработки команд"],
      correct: [0, 1, 2, 3],
      explain: "Четыре группы: IN (ввод), OUT (вывод), MEM (хранение), NET (обмен информацией). Обработку выполняет процессор внутри системного блока."
    },
    {
      topic: "hardware", level: "B", type: "single",
      q: "Что определяет программа CPU-Z?",
      options: ["Характеристики процессора, материнской платы и BIOS, RAM и видеокарты", "Только характеристики жёсткого диска", "Только параметры принтера", "Только скорость интернета"],
      correct: [0],
      explain: "CPU-Z показывает процессор, материнскую плату и BIOS, оперативную память и видеокарту. Жёсткий диск она не диагностирует."
    },
    {
      topic: "hardware", level: "B", type: "single",
      q: "Для чего предназначена программа EVEREST Ultimate Edition?",
      options: ["Диагностика, тестирование и настройка эффективности аппаратных и программных средств", "Набор текста", "Просмотр веб-страниц", "Защита от вирусов"],
      correct: [0],
      explain: "EVEREST — программа диагностики и тестирования компьютера. Сегодня она развивается под названием AIDA64."
    },
    {
      topic: "hardware", level: "B", type: "single",
      q: "Что такое SCSI?",
      options: ["Интерфейс для накопителей и сканеров, а не слот для видеокарты", "Слот для видеокарты", "Тип монитора", "Вид оперативной памяти"],
      correct: [0],
      explain: "SCSI — интерфейс подключения накопителей и периферии. В учебной таблице он стоит рядом с PCIe, но видеокарту в SCSI не устанавливают."
    },
    {
      topic: "hardware", level: "C", type: "single",
      q: "Как выглядит правильный порядок уровней памяти от самой быстрой к самой медленной?",
      options: ["Регистры → кэш → RAM → внешняя память", "RAM → регистры → кэш → HDD", "HDD → RAM → кэш → регистры", "Кэш → регистры → HDD → RAM"],
      correct: [0],
      explain: "Ближе к процессору — быстрее и меньше: регистры, затем кэш L1–L3, затем RAM, затем внешняя память (SSD, HDD)."
    }
  ],

  wording: [
    {
      topic: "hardware",
      q: "Формирует и подаёт управляющие сигналы, обусловленные спецификой выполняемой операции.",
      options: ["Устройство управления (CU)", "Арифметико-логическое устройство (ALU)", "Регистр", "Кэш-память"],
      correct: 0,
      explain: "CU координирует выполнение команд и формирует управляющие сигналы. Вычисления выполняет ALU."
    },
    {
      topic: "hardware",
      q: "Выполняет арифметические и логические операции над данными.",
      options: ["Устройство управления", "Арифметико-логическое устройство", "Регистр", "Шина данных"],
      correct: 1,
      explain: "ALU выполняет арифметику и логику. CU управляет, регистры хранят, шина передаёт."
    },
    {
      topic: "hardware",
      q: "Предназначены для временного хранения данных, промежуточных результатов и адресов, используемых процессором при выполнении команд.",
      options: ["Регистры процессора", "Кэш-память", "Оперативная память", "Постоянная память"],
      correct: 0,
      explain: "Регистры — самая быстрая внутренняя память процессора. Кэш — отдельный буфер между ядром и RAM."
    },
    {
      topic: "hardware",
      q: "Высокоскоростная память, предназначенная для сокращения времени обращения процессора к оперативной памяти.",
      options: ["Кэш-память", "ROM", "SSD", "Видеопамять"],
      correct: 0,
      explain: "Кэш L1–L3 хранит часто используемые данные рядом с ядром и сокращает обращения к медленной RAM."
    },
    {
      topic: "hardware",
      q: "Соединяет основные компоненты компьютера и обеспечивает их взаимодействие.",
      options: ["Материнская плата", "Процессор", "Блок питания", "Оперативная память"],
      correct: 0,
      explain: "Материнская плата объединяет сокет CPU, слоты RAM, PCIe, SATA, M.2 и чипсет."
    },
    {
      topic: "hardware",
      q: "Передаёт адрес ячейки памяти или устройства, к которому выполняется обращение.",
      options: ["Data Bus", "Address Bus", "Control Bus", "PCI Express"],
      correct: 1,
      explain: "Address Bus передаёт адрес. Control Bus — управляющий сигнал, Data Bus — сами данные."
    },
    {
      topic: "hardware",
      q: "Передаёт управляющие сигналы, например команду чтения или записи.",
      options: ["Address Bus", "Data Bus", "Control Bus", "Шина питания"],
      correct: 2,
      explain: "Control Bus сообщает компонентам, какую операцию выполнять: чтение, запись и другие сигналы."
    },
    {
      topic: "hardware",
      q: "Энергонезависимая память, в которой традиционно хранятся прошивки и постоянные данные.",
      options: ["RAM", "ROM", "Кэш", "Видеопамять"],
      correct: 1,
      explain: "ROM — постоянная память. Современные прошивки часто хранятся во Flash и могут обновляться."
    },
    {
      topic: "hardware",
      q: "Выполняет массово-параллельные вычисления и обработку графики.",
      options: ["CPU", "GPU", "SSD", "NIC"],
      correct: 1,
      explain: "GPU содержит множество вычислительных блоков и эффективен для графики, видео и параллельных задач."
    },
    {
      topic: "hardware",
      q: "Энергонезависимый накопитель без движущихся частей, обычно быстрее жёсткого диска.",
      options: ["HDD", "SSD", "DVD-RW", "RAM"],
      correct: 1,
      explain: "SSD использует флеш-память. HDD — механический накопитель с вращающимися пластинами."
    },
    {
      topic: "software",
      q: "Обеспечивает взаимодействие операционной системы с конкретным аппаратным устройством.",
      options: ["Драйвер", "Утилита", "Компилятор", "Браузер"],
      correct: 0,
      explain: "Драйвер связывает ОС и устройство. Утилита обслуживает систему, компилятор переводит код."
    },
    {
      topic: "software",
      q: "Преобразует весь исходный код программы в машинный код до её выполнения.",
      options: ["Интерпретатор", "Компилятор", "Отладчик", "Редактор кода"],
      correct: 1,
      explain: "Компилятор переводит всю программу заранее и создаёт исполняемый файл."
    },
    {
      topic: "software",
      q: "Выполняет исходный код по мере разбора, не создавая отдельного исполняемого файла.",
      options: ["Компилятор", "Интерпретатор", "Архиватор", "Драйвер"],
      correct: 1,
      explain: "Интерпретатор разбирает и выполняет код последовательно. Компилятор работает до запуска программы."
    },
    {
      topic: "software",
      q: "Управляет ресурсами компьютера и обеспечивает взаимодействие пользователя, программ и оборудования.",
      options: ["Операционная система", "Прикладная программа", "Драйвер", "BIOS"],
      correct: 0,
      explain: "ОС распределяет память и процессорное время, управляет файлами и устройствами, предоставляет интерфейс."
    },
    {
      topic: "software",
      q: "Обслуживает систему: диагностика, очистка, архивирование, резервное копирование.",
      options: ["Утилита", "Операционная система", "Компилятор", "Игра"],
      correct: 0,
      explain: "Утилиты — системные программы обслуживания. Они относятся к системному ПО."
    },
    {
      topic: "software",
      q: "Определяет способ организации, хранения и доступа к файлам на накопителе.",
      options: ["Файловая система", "Драйвер", "Процесс", "Протокол"],
      correct: 0,
      explain: "Файловая система задаёт структуру хранения файлов. Примеры: NTFS, FAT32, ext4, APFS."
    },
    {
      topic: "protocols",
      q: "Осуществляет преобразование доменного имени в соответствующий IP-адрес.",
      options: ["DHCP", "DNS", "NAT", "FTP"],
      correct: 1,
      explain: "DNS возвращает IP-адрес по имени сайта. DHCP выдаёт настройки, NAT преобразует адреса."
    },
    {
      topic: "protocols",
      q: "Обеспечивает автоматическое назначение IP-адресов устройствам сети.",
      options: ["DNS", "DHCP", "ICMP", "SMTP"],
      correct: 1,
      explain: "DHCP автоматически выдаёт IP, маску, шлюз и DNS-серверы."
    },
    {
      topic: "security",
      q: "Ограничивает доступ к сети на основе заданных правил безопасности.",
      options: ["Антивирус", "Межсетевой экран (Firewall)", "Архиватор", "Драйвер"],
      correct: 1,
      explain: "Firewall фильтрует сетевой трафик по правилам. Антивирус ищет вредоносные файлы и поведение."
    },
    {
      topic: "equipment",
      q: "Передаёт пакеты данных между различными сетями на основе IP-адресации.",
      options: ["Коммутатор", "Маршрутизатор", "Концентратор", "Повторитель"],
      correct: 1,
      explain: "Маршрутизатор выбирает путь по IP-адресам. Коммутатор работает с MAC внутри локальной сети."
    },
    {
      topic: "equipment",
      q: "Соединяет компьютеры в локальной сети, анализирует MAC-адреса кадров и передаёт их нужному порту.",
      options: ["Концентратор", "Коммутатор", "Маршрутизатор", "Модем"],
      correct: 1,
      explain: "Коммутатор ведёт MAC-таблицу и пересылает кадр только на нужный порт. Hub рассылает всем."
    },
    {
      topic: "protocols",
      q: "Протокол транспортного уровня, устанавливающий соединение, контролирующий доставку и порядок сегментов.",
      options: ["UDP", "TCP", "IP", "ICMP"],
      correct: 1,
      explain: "TCP гарантирует доставку и порядок за счёт подтверждений и повторной отправки. UDP таких гарантий не даёт."
    },
    {
      topic: "protocols",
      q: "Передаёт датаграммы без установления соединения и без гарантии доставки.",
      options: ["TCP", "UDP", "HTTP", "SSH"],
      correct: 1,
      explain: "UDP не устанавливает соединение и не гарантирует доставку. Используется в играх, видео и DNS."
    },
    {
      topic: "protocols",
      q: "Позволяет устройствам частной сети выходить в интернет через один публичный IPv4-адрес.",
      options: ["DNS", "DHCP", "NAT", "VLAN"],
      correct: 2,
      explain: "NAT подменяет частные адреса на публичный адрес маршрутизатора при выходе в интернет."
    },
    {
      topic: "equipment",
      q: "Подключает беспроводных клиентов к проводной локальной сети.",
      options: ["Точка доступа (Access Point)", "Модем", "Коммутатор", "Повторитель"],
      correct: 0,
      explain: "Точка доступа принимает Wi-Fi-клиентов и передаёт их данные в проводную LAN. Роутер дополнительно маршрутизирует."
    },
    {
      topic: "equipment",
      q: "Преобразует сигналы для передачи данных по линии связи: модуляция и демодуляция.",
      options: ["Маршрутизатор", "Модем", "Коммутатор", "Шлюз"],
      correct: 1,
      explain: "Модем = модулятор + демодулятор. Он обеспечивает передачу данных по линии провайдера."
    },
    {
      topic: "programming",
      lang: "JavaScript",
      q: "Язык программирования, используемый для интерактивности веб-страниц и взаимодействия с элементами HTML-документа.",
      options: ["HTML", "CSS", "JavaScript", "SQL"],
      correct: 2,
      explain: "JavaScript управляет поведением страницы. HTML задаёт структуру, CSS — оформление, SQL — базы данных."
    },
    {
      topic: "programming",
      lang: "JavaScript",
      q: "Объектная модель, представляющая HTML-документ в виде дерева элементов.",
      options: ["DOM", "CSSOM", "JSON", "API"],
      correct: 0,
      explain: "DOM (Document Object Model) — дерево элементов страницы, с которым работает JavaScript."
    },
    {
      topic: "programming",
      lang: "JavaScript",
      q: "Метод добавления нового элемента в конец массива.",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correct: 0,
      explain: "push() добавляет элемент в конец. pop() удаляет последний, shift() — первый."
    },
    {
      topic: "programming",
      lang: "JavaScript",
      q: "Метод удаления последнего элемента массива с возвратом удалённого значения.",
      options: ["push()", "pop()", "shift()", "slice()"],
      correct: 1,
      explain: "pop() удаляет последний элемент и возвращает его значение."
    },
    {
      topic: "programming",
      lang: "JavaScript",
      q: "Метод преобразования строки в целое число.",
      options: ["parseInt()", "parseFloat()", "String()", "Number.isInteger()"],
      correct: 0,
      explain: "parseInt() разбирает строку и возвращает целое число. parseFloat() сохраняет дробную часть."
    },
    {
      topic: "programming",
      lang: "JavaScript",
      q: "Оператор строгого сравнения значений без приведения типов.",
      options: ["=", "==", "===", "!="],
      correct: 2,
      explain: "=== сравнивает значение и тип. == допускает приведение, = выполняет присваивание."
    },
    {
      topic: "programming",
      lang: "JavaScript",
      q: "Конструкция, позволяющая выполнить блок кода при выполнении определённого логического условия.",
      options: ["if", "for", "while", "switch"],
      correct: 0,
      explain: "if выполняет блок при истинном условии. for и while — циклы, switch выбирает ветвь по значению."
    },
    {
      topic: "programming",
      lang: "JavaScript",
      q: "Цикл, выполняющийся до тех пор, пока заданное условие истинно.",
      options: ["if", "while", "return", "try"],
      correct: 1,
      explain: "while повторяет блок, пока условие истинно. Условие нужно менять внутри цикла."
    },
    {
      topic: "programming",
      lang: "Python",
      q: "Язык программирования общего назначения, в котором блоки кода выделяются отступами.",
      options: ["Python", "Pascal", "HTML", "SQL"],
      correct: 0,
      explain: "В Python границы блоков задают отступами, а не фигурными скобками. HTML — разметка, SQL — язык запросов к базам данных."
    },
    {
      topic: "programming",
      lang: "Python",
      q: "Упорядоченная изменяемая коллекция элементов, которая записывается в квадратных скобках.",
      options: ["Список", "Кортеж", "Словарь", "Множество"],
      correct: 0,
      explain: "Список (list) записывают в квадратных скобках и можно изменять. Кортеж неизменяем, словарь хранит пары «ключ — значение»."
    },
    {
      topic: "programming",
      lang: "Python",
      q: "Часть последовательности, выделенная по начальному и конечному индексу.",
      options: ["Срез", "Индекс", "Итерация", "Рекурсия"],
      correct: 0,
      explain: "Срез (slice) берёт диапазон элементов, например A[1:3]. Индекс — номер одного элемента, итерация — один проход цикла."
    },
    {
      topic: "programming",
      q: "Цикл, тело которого выполняется хотя бы один раз, потому что условие проверяется после тела.",
      options: ["repeat … until", "while", "for", "if"],
      correct: 0,
      explain: "Это цикл с постусловием. В Pascal его записывают как repeat … until, в Python аналог эмулируют через while True с break."
    },
    {
      topic: "programming",
      q: "Программа, которая переводит весь исходный код в машинный до запуска программы.",
      options: ["Компилятор", "Интерпретатор", "Редактор", "Загрузчик"],
      correct: 0,
      explain: "Компилятор создаёт исполняемый файл заранее. Интерпретатор выполняет код по частям во время работы."
    },
    {
      topic: "programming",
      lang: "HTML",
      q: "Элемент разметки HTML, заключённый в угловые скобки.",
      options: ["Тег", "Атрибут", "Селектор", "Скрипт"],
      correct: 0,
      explain: "Тег — основа разметки, например <p> или <img>. Атрибут уточняет тег, селектор используется в CSS."
    },
    {
      topic: "programming",
      lang: "HTML",
      q: "Дополнительный параметр тега, который уточняет его поведение.",
      options: ["Атрибут", "Тег", "Селектор", "Дескриптор"],
      correct: 0,
      explain: "Атрибут записывают внутри открывающего тега: <img src=\"...\" alt=\"...\">. src и alt — атрибуты."
    },
    {
      topic: "programming",
      lang: "SQL",
      q: "Поле или набор полей, однозначно идентифицирующих каждую запись таблицы.",
      options: ["Первичный ключ", "Внешний ключ", "Индекс", "Поле"],
      correct: 0,
      explain: "Первичный ключ (PRIMARY KEY) уникален и не может быть NULL. Внешний ключ связывает таблицы."
    },
    {
      topic: "networks",
      q: "Принадлежит одной организации или учреждению и обслуживает его внутренние задачи.",
      options: ["Ведомственная сеть", "Государственная сеть", "Глобальная сеть", "Одноранговая сеть"],
      correct: 0,
      explain: "Ведомственная сеть принадлежит одной организации: банку, кассам, предприятию."
    },
    {
      topic: "networks",
      q: "Принадлежит государственным структурам и используется государственными органами.",
      options: ["Ведомственная сеть", "Государственная сеть", "Корпоративная сеть", "Частная сеть"],
      correct: 1,
      explain: "Государственная сеть принадлежит государству: органы внутренних дел, таможня, комитет безопасности."
    },
    {
      topic: "networks",
      q: "Инфраструктура облачных вычислений для работы только одного предприятия, размещённая на его серверах.",
      options: ["Частное облако", "Публичное облако", "Гибридное облако", "Общественное облако"],
      correct: 0,
      explain: "Private cloud обслуживает одно предприятие и может размещаться в его инфраструктуре."
    },
    {
      topic: "networks",
      q: "Комбинация двух или более типов облаков.",
      options: ["Частное облако", "Публичное облако", "Гибридное облако", "Общественное облако"],
      correct: 2,
      explain: "Hybrid cloud объединяет частное и публичное облако или другие модели."
    },
    {
      topic: "networks",
      q: "Количество информации, проходящей через канал связи в единицу времени.",
      options: ["Пропускная способность", "Интернет-трафик", "Задержка", "Стоимость"],
      correct: 0,
      explain: "Пропускная способность измеряется в битах в секунду и показывает скорость канала."
    },
    {
      topic: "networks",
      q: "Объём информации, переданной через сеть за определённый период времени.",
      options: ["Пропускная способность", "Интернет-трафик", "Пакет", "Кадр"],
      correct: 1,
      explain: "Интернет-трафик — это объём переданных данных за период, а не скорость канала."
    },
    {
      topic: "equipment",
      q: "Отрезок кабеля с разъёмами на обоих концах для подключения устройства к порту или розетке.",
      options: ["Патч-корд", "Коаксиальный кабель", "Оптоволокно", "Кабель питания"],
      correct: 0,
      explain: "Патч-корд — готовый кабель с разъёмами, например витая пара с 8P8C."
    },
    {
      topic: "networks",
      q: "Компьютер, подключённый к сети и использующий её ресурсы.",
      options: ["Рабочая станция", "Сервер", "Коммутатор", "Модем"],
      correct: 0,
      explain: "Рабочая станция — клиентский компьютер пользователя. Сервер предоставляет ресурсы."
    }
  ],

  flashcards: [
    { topic: "hardware", term: "CPU", def: "Центральный процессор. Выполняет команды программ, обрабатывает данные и управляет работой системы. Характеристики: частота, ядра, потоки, разрядность, кэш." },
    { topic: "hardware", term: "RAM", def: "Оперативная память. Энергозависимая рабочая область для данных и инструкций запущенных программ. После выключения содержимое теряется." },
    { topic: "hardware", term: "ROM", def: "Постоянная память. Энергонезависимая память для прошивок и постоянных данных. Современные прошивки часто хранятся во Flash." },
    { topic: "hardware", term: "GPU", def: "Графический процессор. Обрабатывает графику и выполняет массово-параллельные вычисления. Бывает интегрированным и дискретным." },
    { topic: "hardware", term: "SSD", def: "Твердотельный накопитель на флеш-памяти. Нет движущихся частей, обычно быстрее HDD. Бывает SATA и NVMe." },
    { topic: "hardware", term: "HDD", def: "Жёсткий диск с вращающимися магнитными пластинами. Механический, большой объём за небольшую цену, обычно медленнее SSD." },
    { topic: "hardware", term: "Motherboard", def: "Материнская плата. Соединяет компоненты: сокет CPU, слоты RAM, PCIe, SATA, M.2, чипсет, BIOS/UEFI." },
    { topic: "hardware", term: "Шина · Bus", def: "Система передачи данных, адресов и управляющих сигналов между компонентами. Address, Data и Control Bus." },
    { topic: "software", term: "Операционная система", def: "Комплекс системных программ, управляющий ресурсами компьютера и обеспечивающий взаимодействие пользователя, приложений и оборудования." },
    { topic: "software", term: "Драйвер", def: "Программа, которая обеспечивает взаимодействие ОС с конкретным аппаратным устройством. Это программное обеспечение." },
    { topic: "software", term: "Утилита", def: "Системная программа для обслуживания, диагностики, настройки, оптимизации или защиты компьютера: антивирус, архиватор, дефрагментатор." },
    { topic: "software", term: "Процесс", def: "Программа, выполняющаяся в данный момент. ОС создаёт процесс, выделяет память и планирует его выполнение." },
    { topic: "networks", term: "LAN", def: "Local Area Network — локальная сеть в пределах комнаты, дома, офиса, школы или здания." },
    { topic: "networks", term: "WAN", def: "Wide Area Network — глобальная сеть, охватывающая страны и континенты. Интернет — крупнейший пример." },
    { topic: "equipment", term: "Switch", def: "Коммутатор. Пересылает Ethernet-кадры по MAC-адресам, запоминает порты и создаёт отдельный домен коллизий на каждом порту." },
    { topic: "equipment", term: "Router", def: "Маршрутизатор. Пересылает IP-пакеты между разными сетями, выбирает маршрут по IP и таблице маршрутизации. Часто выполняет NAT и DHCP." },
    { topic: "protocols", term: "DNS", def: "Domain Name System. Преобразует доменные имена в IP-адреса, чтобы людям не нужно было запоминать числовые адреса." },
    { topic: "protocols", term: "DHCP", def: "Dynamic Host Configuration Protocol. Автоматически выдаёт IP-адрес, маску, шлюз и DNS-серверы. Этапы DORA." },
    { topic: "protocols", term: "TCP", def: "Transmission Control Protocol. Надёжная доставка с установлением соединения, контролем порядка и повторной отправкой потерянных данных." },
    { topic: "protocols", term: "UDP", def: "User Datagram Protocol. Передача датаграмм без обязательного соединения и без гарантии доставки. Используется в играх, видео и DNS." },
    { topic: "protocols", term: "HTTPS", def: "HTTP с TLS. Защищает веб-данные шифрованием и аутентификацией соединения. Обычно порт 443." },
    { topic: "security", term: "CIA", def: "Триада информационной безопасности: Confidentiality (конфиденциальность), Integrity (целостность), Availability (доступность)." },
    { topic: "security", term: "Фишинг", def: "Мошенничество, при котором злоумышленник выдаёт себя за доверенную организацию и пытается получить пароли, коды или данные карты." },
    { topic: "security", term: "Firewall", def: "Брандмауэр. Контролирует сетевой трафик по заданным правилам, разрешает или блокирует соединения." },
    { topic: "security", term: "Шифрование", def: "Обратимое преобразование данных с помощью ключа. Симметричное использует один ключ (AES), асимметричное — пару (RSA)." },
    { topic: "security", term: "Хеширование", def: "Преобразование данных в значение фиксированной длины. Необратимо, используется для проверки целостности. Примеры: SHA-256, SHA-3." },
    { topic: "hardware", term: "CU · Устройство управления", def: "Control Unit. Координирует работу процессора: читает команду, расшифровывает её и формирует управляющие сигналы для остальных блоков. Сама вычислений не выполняет." },
    { topic: "hardware", term: "ALU · Арифметико-логическое устройство", def: "Выполняет арифметические (сложение, вычитание) и логические (И, ИЛИ, НЕ, сравнение) операции над данными. Часть процессора." },
    { topic: "hardware", term: "Регистры", def: "Сверхбыстрая внутренняя память процессора для временного хранения данных, промежуточных результатов и адресов во время выполнения команд." },
    { topic: "hardware", term: "Кэш-память", def: "Высокоскоростная память между ядром и RAM для часто используемых данных и инструкций. Уровни L1–L3 различаются скоростью и объёмом." },
    { topic: "software", term: "Компилятор", def: "Транслятор, который переводит весь исходный код в машинный до выполнения и создаёт исполняемый файл. Примеры: C/C++." },
    { topic: "software", term: "Интерпретатор", def: "Транслятор, который разбирает и выполняет код по мере чтения, без отдельного исполняемого файла. Примеры: Python, JavaScript." },
    { topic: "programming", lang: "JavaScript", term: "JavaScript", def: "Язык программирования для интерактивности веб-страниц: реагирует на действия пользователя и изменяет содержимое HTML-документа через DOM." },
    { topic: "programming", lang: "JavaScript", term: "DOM", def: "Document Object Model — объектная модель HTML-документа в виде дерева элементов, к которым обращается программа для изменения страницы." },
    { topic: "programming", lang: "Python", term: "Python", def: "Язык программирования общего назначения. В ЕНТ на нём записывают задачи с массивами, циклами и файлами. Блоки кода выделяются отступами." },
    { topic: "programming", lang: "Python", term: "Список · list", def: "Изменяемая упорядоченная коллекция элементов в квадратных скобках: A = [1, 2, 3]. Элементы доступны по индексу, начиная с 0." },
    { topic: "programming", lang: "Python", term: "Индекс", def: "Номер элемента в последовательности. В Python и JavaScript начинается с 0, в Pascal — с 1. Отрицательный индекс A[-1] означает последний элемент." },
    { topic: "programming", lang: "Python", term: "Срез · slice", def: "Часть списка или строки, заданная диапазоном индексов: A[1:3] берёт элементы с индексами 1 и 2, правая граница не включается." },
    { topic: "programming", lang: "Python", term: "for", def: "Цикл перебора: for x in A проходит по всем элементам, for i in range(n) — по числам от 0 до n−1. Число повторений известно заранее." },
    { topic: "programming", lang: "Python", term: "while", def: "Цикл с предусловием: тело повторяется, пока условие истинно. Условие проверяется до каждого прохода, поэтому тело может не выполниться ни разу." },
    { topic: "programming", term: "Функция", def: "Именованный блок кода, который можно вызвать несколько раз. Принимает аргументы и возвращает результат через return." },
    { topic: "programming", term: "Блок-схема", def: "Графическая запись алгоритма: овал — начало и конец, прямоугольник — действие, ромб — условие, параллелограмм — ввод и вывод." },
    { topic: "programming", term: "Компилятор", def: "Программа, которая переводит весь исходный код в машинный до запуска. Интерпретатор, в отличие от него, выполняет код по частям." },
    { topic: "programming", lang: "HTML", term: "HTML", def: "HyperText Markup Language — язык разметки веб-страниц. Задаёт структуру документа тегами: заголовки, абзацы, ссылки, изображения." },
    { topic: "programming", lang: "HTML", term: "Тег", def: "Элемент разметки в угловых скобках, например <p> или <img>. Бывает парным (с закрывающим тегом) и одиночным." },
    { topic: "programming", lang: "SQL", term: "SQL", def: "Structured Query Language — язык запросов к реляционным базам данных: SELECT, INSERT, UPDATE, DELETE." },
    { topic: "programming", lang: "SQL", term: "PRIMARY KEY", def: "Первичный ключ — поле или набор полей, однозначно идентифицирующих запись. Уникален, не может быть NULL, в таблице один." },
    { topic: "networks", term: "Ведомственная сеть", def: "Сеть, принадлежащая одной организации или учреждению и обслуживающая его внутренние задачи: банк, предприятие, кассы." },
    { topic: "networks", term: "Государственная сеть", def: "Сеть, принадлежащая государственным структурам: органы внутренних дел, таможенная служба, комитет национальной безопасности." },
    { topic: "networks", term: "Облачные технологии", def: "Модель предоставления вычислений, хранения и программ через интернет. Серверы, реализующие облачные вычисления, называют вычислительными облаками." },
    { topic: "networks", term: "Частное облако", def: "Private cloud. Инфраструктура для одного предприятия или организации, часто на собственных серверах." },
    { topic: "networks", term: "Публичное облако", def: "Public cloud. Инфраструктура, доступная широкой публике через интернет: Google Drive, Microsoft 365, iCloud." },
    { topic: "networks", term: "Гибридное облако", def: "Hybrid cloud. Комбинация двух или более типов облаков, например частного и публичного." },
    { topic: "networks", term: "Общественное облако", def: "Community cloud. Инфраструктура для организаций или потребителей с общими целями и требованиями." },
    { topic: "networks", term: "Пропускная способность", def: "Количество информации, проходящей через канал связи в единицу времени. Измеряется в Кбит/с, Мбит/с, Гбит/с." },
    { topic: "networks", term: "Интернет-трафик", def: "Объём информации, переданной через компьютерную сеть за определённый период времени. Q = q · t." },
    { topic: "equipment", term: "Патч-корд", def: "Готовый отрезок витой пары или оптоволокна с разъёмами на обоих концах для подключения устройства к порту, розетке или панели." },
    { topic: "networks", term: "Рабочая станция", def: "Компьютер пользователя, подключённый к сети и использующий её ресурсы. Не путать с сервером, который эти ресурсы предоставляет." },
    { topic: "networks", term: "Файл-сервер", def: "Сервер, который хранит файлы и предоставляет к ним общий доступ по сети." },
    { topic: "networks", term: "Принт-сервер", def: "Сервер, обслуживающий общий сетевой принтер и очередь заданий печати." },
    { topic: "networks", term: "Сервер приложений", def: "Сервер, который выполняет прикладные программы и предоставляет их функции клиентам сети." },
    { topic: "networks", term: "Сервер служб каталогов", def: "Сервер, централизованно хранящий учётные записи пользователей и ресурсы каталога. Пример — контроллер домена Active Directory." },
    { topic: "networks", term: "Сетевой узел · Node", def: "Устройство, соединённое с другими устройствами как часть компьютерной сети: компьютер, телефон, маршрутизатор, коммутатор." },
    { topic: "networks", term: "Канал связи", def: "Физическая среда, по которой передаются информационные сигналы: кабель, оптоволокно, радиоволны." },
    { topic: "networks", term: "Аппаратура передачи данных", def: "Оборудование для подключения компьютеров к каналам связи: сетевая карта, модемы, мосты, маршрутизаторы, шлюзы." },
    { topic: "networks", term: "Витая пара", def: "Кабель из скрученных попарно изолированных проводников. Скорость до 1000 Мбит/с, длина до 100 м. Дешёвый и простой в монтаже, поэтому основной кабель локальных сетей. Пример категории — CAT5." },
    { topic: "networks", term: "Коаксиальный кабель", def: "Два цилиндрических медных проводника, разделённых изоляцией. Скорость 50–100 Мбит/с, длина до нескольких километров. Устойчивее к помехам, чем витая пара." },
    { topic: "networks", term: "Оптоволоконный кабель", def: "Кабель на основе волоконных световодов, передаёт оптические сигналы. Скорость по учебнику до 3 Гбит/с, высокая защита от помех, несанкционированный доступ извне исключён." },
    { topic: "networks", term: "Wi-Fi", def: "Wireless Fidelity. Беспроводная локальная сеть. Радиус одной точки доступа: до 100 м при прямой видимости, до 10 м в квартирах и офисах. Изначально заменял кабельные сети в корпоративной среде." },
    { topic: "networks", term: "WiMAX", def: "Беспроводная технология широкополосного доступа «последней мили»: покрывает город или район там, где нет кабельной линии." },
    { topic: "networks", term: "4G", def: "Четвёртое поколение мобильной связи. Мобильный интернет до гигабитных скоростей, игры, онлайн-видео, видеосвязь. Скорость загрузки около 10 Мбит/с, плотность подключения 100 тыс. устройств/км²." },
    { topic: "networks", term: "5G", def: "Пятое поколение мобильной связи. Высокая скорость, низкая задержка, энергоэффективность. Скорость загрузки около 100 Мбит/с, плотность подключения 1 млн устройств/км²." },
    { topic: "networks", term: "Широковещательный адрес · Broadcast", def: "Последний адрес подсети, где все биты хостовой части равны единице. Данные на него получают все устройства сети. Для сети 192.168.1.0/24 это 192.168.1.255." },
    { topic: "networks", term: "Статический IP", def: "Адрес, назначенный вручную и не меняющийся при перезагрузке устройства или роутера. Удобен для серверов, принтеров и оборудования." },
    { topic: "networks", term: "Динамический IP", def: "Адрес, который автоматически выдаёт DHCP-сервер. Может меняться при каждом новом подключении к сети." },
    { topic: "networks", term: "Домен верхнего уровня · TLD", def: "Последняя часть доменного имени: географические зоны (.kz, .ru, .jp) и тематические (.com, .edu, .gov, .org). Арендуется на время, купить навсегда нельзя." },
    { topic: "equipment", term: "ADSL-модем", def: "Модем для подключения к интернету через телефонную линию. Бывает внешним (отдельный корпус) и внутренним (плата расширения в материнской плате)." },
    { topic: "networks", term: "Число хостов в подсети", def: "K = 2^n − 2, где n — количество нулей в маске. Пример: /26 → 2^6 − 2 = 62 компьютера. Два адреса резервируются под сеть и broadcast." },
    { topic: "hardware", term: "Базовая конфигурация", def: "Обязательный набор устройств персонального компьютера: системный блок, монитор, клавиатура и мышь. Остальные устройства — дополнительные." },
    { topic: "hardware", term: "Открытая архитектура", def: "Принцип, по которому состав устройств может быть разным, но обязательный набор сохраняется. Пользователь сам подключает дополнительные устройства и модернизирует компьютер по частям." },
    { topic: "hardware", term: "Системный блок", def: "Главное устройство компьютера. Внутри расположены процессор, оперативная память, постоянное запоминающее устройство, блок питания, порты ввода-вывода и накопители." },
    { topic: "hardware", term: "Сбалансированная конфигурация", def: "Процессор, память, видеокарта и шина обмена подобраны так, чтобы каждый тип задач обрабатывался максимально быстро, без узких мест и лишних задержек." },
    { topic: "hardware", term: "Несбалансированная конфигурация", def: "Конфигурация, в которой один компонент ограничивает остальные. Пример: мощная видеокарта при слабом процессоре, который не успевает подавать данные." },
    { topic: "hardware", term: "Оптимальная конфигурация", def: "Гармония между набором функциональных устройств и затратами на них: нет смысла платить за возможности, которые не используются." },
    { topic: "hardware", term: "Чипсет · Chipset", def: "Набор микросхем на материнской плате, обеспечивающий обмен данными между центральным процессором и периферийными устройствами." },
    { topic: "hardware", term: "BIOS", def: "Basic Input/Output System — базовая система ввода-вывода на материнской плате. Тестирует оборудование (POST), настраивает параметры, загружает ОС и обслуживает прерывания." },
    { topic: "hardware", term: "POST", def: "Power-On Self-Test — автоматическое тестирование оборудования, которое BIOS выполняет при включении компьютера." },
    { topic: "hardware", term: "UEFI", def: "Unified Extensible Firmware Interface — современный интерфейс прошивки, заменивший традиционный BIOS. Удобный интерфейс, управление мышью, обновление через интернет, быстрая загрузка." },
    { topic: "hardware", term: "Сопроцессор", def: "Специализированный процессор, дополняющий основной. Не имеет собственной программы, расширяет систему команд и регистров и работает по командам центрального процессора." },
    { topic: "hardware", term: "Слот расширения", def: "Гнездо на материнской плате, которое связывает устройство с шиной: видеокарту, сетевую или звуковую карту, контроллер. Примеры: PCIe, PCI, AGP." },
    { topic: "hardware", term: "Блок питания · PSU", def: "Устройство, обеспечивающее компьютер электроэнергией с нужным напряжением, частотой и мощностью. Жёлтый провод — +12 В, красный — +5 В, чёрный — 0 В." },
    { topic: "hardware", term: "Пиксель", def: "Минимальная точка изображения на экране. Чем больше пикселей по горизонтали и вертикали, тем выше разрешение и чётче изображение." },
    { topic: "hardware", term: "Монитор", def: "Устройство вывода информации на экран. Размер измеряется в дюймах по диагонали. Качество определяется количеством пикселей по горизонтали и вертикали." },
    { topic: "hardware", term: "Шина данных · Data Bus", def: "Часть общей шины для параллельной передачи двоичных разрядов данных между устройствами компьютера." },
    { topic: "hardware", term: "Адресная шина · Address Bus", def: "Часть общей шины, предназначенная для передачи адреса памяти или порта ввода-вывода." },
    { topic: "hardware", term: "Командная шина · Control Bus", def: "Часть общей шины, передающая управляющие сигналы: чтение, запись, синхронизацию." },
    { topic: "hardware", term: "SCSI", def: "Интерфейс для подключения накопителей и периферии (например, сканеров). Это не слот для видеокарты, хотя в учебной таблице он стоит рядом с PCIe." },
    { topic: "hardware", term: "CPU-Z", def: "Программа диагностики: показывает характеристики процессора, материнской платы и BIOS, оперативной памяти и видеокарты. Жёсткий диск не отображает." },
    { topic: "hardware", term: "AIDA64 · EVEREST", def: "Программа диагностики, тестирования и настройки эффективности аппаратных и программных средств компьютера. Прежнее название — EVEREST Ultimate Edition." }
  ],

  videos: [
    {
      id: "sOKljYVLD2Q", topic: "networks",
      title: "Введение в курс «Компьютерные сети»",
      note: "С чего начинаются сети: базовые понятия и структура курса.",
      source: "YouTube · лекция"
    },
    {
      id: "OLFA0soYGhw", topic: "networks",
      title: "Введение в компьютерные сети",
      note: "Принципы устройства и работы компьютерных сетей для начинающих.",
      source: "YouTube · курс"
    },
    {
      id: "Y4LK1OZ54h0", topic: "networks",
      title: "Классификация компьютерных сетей",
      note: "PAN, LAN, MAN, WAN и признаки классификации.",
      source: "YouTube · лекция"
    },
    {
      id: "Bwg-om5NnmQ", topic: "networks",
      title: "Маршрутизатор, коммутатор, хаб: в чём разница",
      note: "Практическое объяснение отличий сетевого оборудования.",
      source: "YouTube · обзор"
    },
    {
      id: "66y_SwqOrqI", topic: "networks",
      title: "Урок 4. Компьютерные сети",
      note: "Основные составляющие сетей и логика передачи информации.",
      source: "YouTube · урок"
    },
    {
      id: "E9NCKg33k8A", topic: "hardware",
      title: "Как устроен компьютер: основы за полчаса",
      note: "Компоненты ПК и их роли простыми словами.",
      source: "YouTube · обзор"
    },
    {
      id: "4WXNZWlpRaQ", topic: "hardware",
      title: "Структура компьютера: что за что отвечает",
      note: "Ввод, обработка, хранение и вывод данных. Устройство системного блока.",
      source: "YouTube · урок"
    },
    {
      id: "W6thMGQOX_k", topic: "hardware",
      title: "Как работает процессор",
      note: "Транзисторы, такты и вычисления — визуальное объяснение.",
      source: "YouTube · научпоп"
    },
    {
      id: "tC1NLW-cmqw", topic: "hardware",
      title: "Что такое аппаратное и программное обеспечение?",
      note: "Hardware и Software: различия и примеры.",
      source: "YouTube · объяснение"
    },
    {
      id: "weGU8xK483s", topic: "software",
      title: "Операционные системы: история, назначение, функции",
      note: "Зачем нужна ОС и какие задачи она решает.",
      source: "YouTube · лекция"
    },
    {
      id: "inEFG-Zk5DE", topic: "software",
      title: "Как работает операционная система",
      note: "Основные принципы работы ОС на примере Windows, macOS, Linux.",
      source: "YouTube · объяснение"
    },
    {
      id: "3LV37fT9ZWg", topic: "software",
      title: "Что такое драйвер и зачем он нужен",
      note: "Связь операционной системы и оборудования.",
      source: "YouTube · объяснение"
    },
    {
      id: "80w6FLmNXSU", topic: "osi",
      title: "Модель OSI — упрощённая и понятная",
      note: "Семь уровней с аналогиями для новичков.",
      source: "YouTube · объяснение"
    },
    {
      id: "je0QFU7p5Oo", topic: "osi",
      title: "Модель OSI за 7 минут",
      note: "Быстрый обзор уровней и их назначения.",
      source: "YouTube · курс"
    },
    {
      id: "PYHKOwBfsLI", topic: "osi",
      title: "Сети для несетевиков: OSI/ISO, IP и MAC, NAT, TCP и UDP, DNS",
      note: "Большой обзор базовых сетевых технологий.",
      source: "YouTube · лекция"
    },
    {
      id: "m4Cxa91Fg34", topic: "osi",
      title: "Как устроены IP-адреса и маска подсети",
      note: "IP-адрес, маска и извлечение информации из адреса.",
      source: "YouTube · объяснение"
    },
    {
      id: "RhJkD9dUpao", topic: "osi",
      title: "IP-адресация для начинающих: адрес, маска, подсеть и NAT",
      note: "Разбор подсетей и NAT на примерах.",
      source: "YouTube · урок"
    },
    {
      id: "3-X-FVXv1yg", topic: "security",
      title: "Информационная безопасность: основы",
      note: "Базовые понятия защиты информации.",
      source: "YouTube · лекция"
    },
    {
      id: "ay19U3qi5Zw", topic: "security",
      title: "Информационная безопасность с нуля: большой гайд",
      note: "Обзор профессии и базовых концепций ИБ.",
      source: "YouTube · гайд"
    },
    {
      id: "UNJWja9Kisc", topic: "security",
      title: "Фишинговые атаки",
      note: "Как работает фишинг и почему ему доверяют.",
      source: "YouTube · лекция"
    },
    {
      id: "VYRrNAdCYoY", topic: "security",
      title: "Основы кибербезопасности — часть 1",
      note: "Базовый вебинар по кибербезопасности на русском.",
      source: "YouTube · вебинар"
    }
  ]
};
