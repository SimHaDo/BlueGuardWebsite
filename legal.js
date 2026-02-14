const supportedLangs = ["en", "ja", "ru", "uk", "pt"];

function resolveDeviceLanguage() {
  const candidate = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
  const normalized = String(candidate).toLowerCase();
  const short = normalized.split("-")[0];
  return supportedLangs.includes(short) ? short : "en";
}

const legalCopy = {
  en: {
    common: {
      back: "Back to Website",
      effective: "Effective date",
      contactTitle: "Contact",
      contactDeveloper: "Developer",
      contactStudio: "Studio",
      contactEmail: "Email"
    },
    terms: {
      title: "Terms of Use",
      intro:
        "These Terms govern use of BlueGuard Authenticator. By downloading or using the app, you agree to these conditions.",
      sections: [
        {
          title: "Who can use the app",
          bullets: [
            "Use the app only in compliance with applicable law and platform rules.",
            "If you do not agree with these terms, do not use BlueGuard."
          ]
        },
        {
          title: "License scope",
          bullets: [
            "You receive a limited, non-exclusive, revocable license for personal or internal business use.",
            "Redistribution, resale, sublicensing, or commercial copying is prohibited unless required by law."
          ]
        },
        {
          title: "Prohibited behavior",
          bullets: [
            "Do not reverse engineer or bypass app security controls.",
            "Do not use the app for fraud, abuse, or illegal activity.",
            "Do not interfere with service reliability or user safety."
          ]
        },
        {
          title: "Account and device responsibility",
          bullets: [
            "You are responsible for passcodes, biometrics, recovery data, and device-level protection.",
            "If credentials are lost, encrypted content may become unrecoverable."
          ]
        },
        {
          title: "Subscriptions and billing",
          bullets: [
            "Paid features may be offered through Apple In-App Purchase.",
            "Billing, renewal, cancellation, and refund handling are governed by Apple policies."
          ]
        },
        {
          title: "Intellectual property",
          bullets: [
            "BlueGuard app content, visual identity, and software are owned by SimHaDo Apps.",
            "Brand assets cannot be used without prior written permission."
          ]
        },
        {
          title: "Warranty and liability",
          bullets: [
            "The app is provided on an \"as is\" and \"as available\" basis.",
            "To the maximum extent permitted by law, liability for indirect or consequential damages is excluded.",
            "Where limitation is allowed, total liability is capped to the amount paid in the previous 12 months."
          ]
        },
        {
          title: "Updates and termination",
          bullets: [
            "We may update these terms when product, legal, or security needs change.",
            "Continued use after publication of changes means acceptance of the revised terms.",
            "Access may be suspended for serious violations of these terms."
          ]
        }
      ]
    },
    privacy: {
      title: "Privacy Policy",
      intro:
        "This policy explains how BlueGuard handles information in the app, including security data, technical signals, and optional diagnostics.",
      sections: [
        {
          title: "Data categories",
          bullets: [
            "User-entered data: tokens, password entries, secure notes, labels, and backup metadata.",
            "Security settings: lock and protection preferences required for app operation.",
            "Purchase status: subscription entitlement data provided by Apple.",
            "Diagnostics (optional): crash and performance events for reliability improvements."
          ]
        },
        {
          title: "How data is used",
          bullets: [
            "Deliver core features such as token generation, vault access, and backup flows.",
            "Maintain security protections and prevent misuse.",
            "Support paid feature access and quality improvements."
          ]
        },
        {
          title: "Storage and encryption approach",
          bullets: [
            "Sensitive content is designed to be protected with device and app-level safeguards.",
            "When backup features are enabled, encryption is applied before transfer where supported.",
            "You remain responsible for passcodes, biometrics, and recovery controls."
          ]
        },
        {
          title: "Sharing and disclosure",
          bullets: [
            "We do not sell personal information.",
            "Data is shared with processors only when required to provide requested functionality.",
            "Legal disclosure may occur when required by law or for rights and safety protection."
          ]
        },
        {
          title: "Retention and deletion",
          bullets: [
            "Data stays on your device unless you activate backup/sync or delete records.",
            "Cloud retention depends on the selected provider and your account settings.",
            "Diagnostics are retained only as long as needed for troubleshooting and quality work."
          ]
        },
        {
          title: "Your choices",
          bullets: [
            "You can edit or remove entries in the app.",
            "Optional sync/diagnostic features can be disabled where controls are available.",
            "Privacy requests can be sent by email."
          ]
        },
        {
          title: "Children and international processing",
          bullets: [
            "BlueGuard is not intended for children where parental consent is legally required.",
            "If processors in other regions are involved, safeguards are applied in line with applicable law."
          ]
        },
        {
          title: "Policy updates",
          bullets: [
            "We may revise this policy to reflect legal, technical, or product changes.",
            "Updated versions are published here with a new effective date."
          ]
        }
      ]
    }
  },
  ru: {
    common: {
      back: "На сайт",
      effective: "Дата вступления в силу",
      contactTitle: "Контакты",
      contactDeveloper: "Разработчик",
      contactStudio: "Студия",
      contactEmail: "Email"
    },
    terms: {
      title: "Условия использования",
      intro:
        "Эти Условия регулируют использование BlueGuard Authenticator. Устанавливая и используя приложение, вы принимаете данные правила.",
      sections: [
        {
          title: "Кто может пользоваться приложением",
          bullets: [
            "Используйте BlueGuard только в рамках применимого законодательства и правил платформы.",
            "Если вы не согласны с Условиями, использование приложения должно быть прекращено."
          ]
        },
        {
          title: "Лицензия",
          bullets: [
            "Вам предоставляется ограниченная, неисключительная и отзывная лицензия для личного или внутреннего рабочего использования.",
            "Перепродажа, тиражирование, сублицензирование и несанкционированная дистрибуция запрещены."
          ]
        },
        {
          title: "Запрещенные действия",
          bullets: [
            "Нельзя обходить защитные механизмы приложения или вмешиваться в его работу.",
            "Нельзя использовать приложение для незаконной деятельности, мошенничества или злоупотреблений.",
            "Нельзя совершать действия, которые ухудшают безопасность и стабильность сервиса."
          ]
        },
        {
          title: "Ответственность пользователя",
          bullets: [
            "Пользователь отвечает за безопасность устройства, биометрии, PIN/пароля и данных восстановления.",
            "При утрате учетных данных доступ к зашифрованному содержимому может быть безвозвратно потерян."
          ]
        },
        {
          title: "Подписки и платежи",
          bullets: [
            "Платные функции могут предоставляться через Apple In-App Purchase.",
            "Оплата, продление, отмена и возвраты регулируются правилами Apple."
          ]
        },
        {
          title: "Интеллектуальная собственность",
          bullets: [
            "Код, дизайн, текст и бренд BlueGuard принадлежат SimHaDo Apps.",
            "Использование названия и графики бренда без письменного согласия запрещено."
          ]
        },
        {
          title: "Гарантии и ограничение ответственности",
          bullets: [
            "Приложение предоставляется по модели \"как есть\" и \"по мере доступности\".",
            "В пределах, разрешенных законом, исключается ответственность за косвенные и сопутствующие убытки.",
            "Если ограничение допустимо, совокупная ответственность ограничивается суммой платежей за последние 12 месяцев."
          ]
        },
        {
          title: "Обновления условий и прекращение доступа",
          bullets: [
            "Условия могут обновляться при изменении продукта, права или требований безопасности.",
            "Продолжение использования после публикации обновлений означает согласие с новой редакцией.",
            "При существенном нарушении Условий доступ может быть ограничен или прекращен."
          ]
        }
      ]
    },
    privacy: {
      title: "Политика конфиденциальности",
      intro:
        "Политика описывает, какие данные обрабатывает BlueGuard и как обеспечивается защита информации в приложении.",
      sections: [
        {
          title: "Какие данные обрабатываются",
          bullets: [
            "Данные, введенные пользователем: токены, пароли, защищенные заметки, метки и резервные данные.",
            "Настройки безопасности: параметры блокировки и защиты, необходимые для работы приложения.",
            "Данные о подписке: статусы покупок, предоставляемые Apple.",
            "Диагностика (опционально): события сбоев и производительности для повышения стабильности."
          ]
        },
        {
          title: "Для чего используются данные",
          bullets: [
            "Для работы основных функций: генерация кодов, доступ к хранилищу, резервное копирование.",
            "Для поддержания механизмов безопасности и предотвращения злоупотреблений.",
            "Для проверки доступа к платным возможностям и улучшения качества приложения."
          ]
        },
        {
          title: "Хранение и шифрование",
          bullets: [
            "Чувствительные данные защищаются средствами устройства и приложения.",
            "При включенных резервных сценариях данные шифруются до передачи, если это поддерживается конфигурацией.",
            "Пользователь несет ответственность за пароль устройства, биометрию и механизмы восстановления."
          ]
        },
        {
          title: "Передача и раскрытие",
          bullets: [
            "Мы не продаем персональные данные.",
            "Передача подрядчикам допускается только когда это нужно для запрошенной функции.",
            "Раскрытие возможно в случаях, прямо предусмотренных законом или для защиты прав и безопасности."
          ]
        },
        {
          title: "Сроки хранения и удаление",
          bullets: [
            "Данные остаются на устройстве, пока вы сами не включите синхронизацию/бэкап или не удалите записи.",
            "Срок хранения в облаке зависит от выбранного провайдера и параметров вашей учетной записи.",
            "Диагностические данные хранятся только на период, необходимый для исправления проблем."
          ]
        },
        {
          title: "Права и выбор пользователя",
          bullets: [
            "Вы можете редактировать и удалять записи в приложении.",
            "Опциональные функции синхронизации и диагностики можно отключить в доступных настройках.",
            "По вопросам приватности можно обратиться по email."
          ]
        },
        {
          title: "Дети и трансграничная обработка",
          bullets: [
            "Приложение не предназначено для детей в юрисдикциях, где требуется отдельное согласие родителей.",
            "При международной обработке применяются защитные меры в соответствии с применимым правом."
          ]
        },
        {
          title: "Изменения политики",
          bullets: [
            "Политика может обновляться при изменении правовых, технических или продуктовых условий.",
            "Новая версия публикуется на этой странице с актуальной датой вступления в силу."
          ]
        }
      ]
    }
  },
  uk: {
    common: {
      back: "На сайт",
      effective: "Дата набрання чинності",
      contactTitle: "Контакти",
      contactDeveloper: "Розробник",
      contactStudio: "Студія",
      contactEmail: "Email"
    },
    terms: {
      title: "Умови використання",
      intro:
        "Ці Умови визначають порядок використання BlueGuard Authenticator. Встановлюючи або використовуючи застосунок, ви погоджуєтеся з ними.",
      sections: [
        {
          title: "Хто може користуватися застосунком",
          bullets: [
            "Використовуйте застосунок лише відповідно до чинного законодавства та правил платформи.",
            "Якщо ви не погоджуєтесь з Умовами, користування застосунком слід припинити."
          ]
        },
        {
          title: "Обсяг ліцензії",
          bullets: [
            "Надається обмежена, невиключна та відклична ліцензія для особистого або внутрішнього робочого використання.",
            "Перепродаж, копіювання для комерційного розповсюдження та субліцензування заборонені, якщо інше прямо не вимагається законом."
          ]
        },
        {
          title: "Що заборонено",
          bullets: [
            "Не можна обходити механізми захисту або втручатися в роботу застосунку.",
            "Не можна використовувати BlueGuard для шахрайства, порушень закону чи зловживань.",
            "Не допускаються дії, що шкодять безпеці або стабільності сервісу."
          ]
        },
        {
          title: "Відповідальність користувача",
          bullets: [
            "Користувач відповідає за захист пристрою, біометрії, коду доступу та відновлювальних даних.",
            "У разі втрати ключових облікових даних зашифрований вміст може бути недоступним для відновлення."
          ]
        },
        {
          title: "Підписки та оплата",
          bullets: [
            "Платні функції можуть надаватися через Apple In-App Purchase.",
            "Оплата, продовження, скасування та повернення регулюються правилами Apple."
          ]
        },
        {
          title: "Інтелектуальна власність",
          bullets: [
            "Код, дизайн, тексти та бренд BlueGuard належать SimHaDo Apps.",
            "Використання назви та графіки бренду без письмового дозволу не допускається."
          ]
        },
        {
          title: "Гарантії та відповідальність",
          bullets: [
            "Застосунок надається за принципом \"як є\" та \"у міру доступності\".",
            "У межах, дозволених законом, виключається відповідальність за непрямі та побічні збитки.",
            "Якщо обмеження допустиме, загальна відповідальність обмежується сумою платежів за останні 12 місяців."
          ]
        },
        {
          title: "Оновлення умов та припинення доступу",
          bullets: [
            "Умови можуть оновлюватися через правові, технічні або продуктові зміни.",
            "Подальше використання після публікації змін означає прийняття нової редакції.",
            "За суттєве порушення Умов доступ може бути обмежено або припинено."
          ]
        }
      ]
    },
    privacy: {
      title: "Політика конфіденційності",
      intro:
        "Ця Політика пояснює, які дані обробляє BlueGuard та як забезпечується їхній захист у застосунку.",
      sections: [
        {
          title: "Категорії даних",
          bullets: [
            "Дані, введені користувачем: токени, паролі, захищені нотатки, мітки та резервні дані.",
            "Параметри безпеки: налаштування блокування та захисту, потрібні для роботи застосунку.",
            "Дані підписки: статуси покупок, які надає Apple.",
            "Діагностика (опційно): події збоїв і продуктивності для підвищення стабільності."
          ]
        },
        {
          title: "Мета використання",
          bullets: [
            "Надання ключових функцій: генерація кодів, доступ до сховища, резервне копіювання.",
            "Підтримка механізмів безпеки та запобігання зловживанням.",
            "Перевірка доступу до платних функцій і покращення якості застосунку."
          ]
        },
        {
          title: "Зберігання та шифрування",
          bullets: [
            "Чутливі дані захищаються засобами пристрою та самого застосунку.",
            "Якщо увімкнено резервні сценарії, дані шифруються до передачі за підтримуваною конфігурацією.",
            "Користувач відповідає за код пристрою, біометрію та засоби відновлення."
          ]
        },
        {
          title: "Передача і розкриття",
          bullets: [
            "Ми не продаємо персональні дані.",
            "Передача підрядникам допускається лише коли це необхідно для запитаної функції.",
            "Розкриття може відбуватися у випадках, передбачених законом, або для захисту прав і безпеки."
          ]
        },
        {
          title: "Строки зберігання",
          bullets: [
            "Дані залишаються на пристрої, доки ви не ввімкнете синхронізацію/бекап або не видалите записи.",
            "Строки хмарного зберігання залежать від обраного провайдера й налаштувань вашого акаунта.",
            "Діагностичні дані зберігаються лише на період, потрібний для виправлення проблем."
          ]
        },
        {
          title: "Права користувача",
          bullets: [
            "Ви можете редагувати або видаляти записи в застосунку.",
            "Опційні функції синхронізації та діагностики можна вимкнути в доступних налаштуваннях.",
            "З питань приватності можна звернутися через email."
          ]
        },
        {
          title: "Діти та міжнародна обробка",
          bullets: [
            "Застосунок не призначений для дітей у юрисдикціях, де потрібна згода батьків.",
            "За міжнародної обробки застосовуються належні правові та технічні гарантії."
          ]
        },
        {
          title: "Оновлення політики",
          bullets: [
            "Політика може оновлюватися відповідно до правових, технічних або продуктових змін.",
            "Нова редакція публікується на цій сторінці з актуальною датою набрання чинності."
          ]
        }
      ]
    }
  },
  ja: {
    common: {
      back: "サイトに戻る",
      effective: "施行日",
      contactTitle: "お問い合わせ",
      contactDeveloper: "開発者",
      contactStudio: "スタジオ",
      contactEmail: "メール"
    },
    terms: {
      title: "利用規約",
      intro:
        "本規約は、BlueGuard Authenticatorの利用条件を定めるものです。アプリをダウンロードまたは利用した時点で、本規約に同意したものとみなされます。",
      sections: [
        {
          title: "利用資格",
          bullets: [
            "法令およびプラットフォーム規約に従ってアプリを利用してください。",
            "本規約に同意できない場合は、利用を中止してください。"
          ]
        },
        {
          title: "ライセンス範囲",
          bullets: [
            "個人利用または社内利用を目的とした、限定的・非独占・取消可能な利用権を付与します。",
            "再配布、再販売、再許諾、商用複製は、法令で求められる場合を除き禁止します。"
          ]
        },
        {
          title: "禁止事項",
          bullets: [
            "アプリの解析、リバースエンジニアリング、保護機能の回避を行わないでください。",
            "不正行為、違法行為、第三者への迷惑行為に利用しないでください。",
            "サービスの安定性や安全性を損なう行為は禁止です。"
          ]
        },
        {
          title: "ユーザーの責任",
          bullets: [
            "端末のパスコード、生体認証、復旧情報の管理はユーザーの責任です。",
            "認証情報を喪失した場合、暗号化データを復元できない可能性があります。"
          ]
        },
        {
          title: "課金機能",
          bullets: [
            "有料機能はAppleのアプリ内課金を通じて提供される場合があります。",
            "請求、更新、解約、返金はAppleの規定に従います。"
          ]
        },
        {
          title: "知的財産",
          bullets: [
            "BlueGuardのソフトウェア、デザイン、ブランド要素はSimHaDo Appsに帰属します。",
            "名称やロゴ等の無断使用は禁止します。"
          ]
        },
        {
          title: "保証と責任制限",
          bullets: [
            "本アプリは\"現状有姿\"かつ\"提供可能な範囲\"で提供されます。",
            "法令で認められる範囲で、間接損害・特別損害等の責任は負いません。",
            "制限が許容される場合、責任総額は直近12か月の支払額を上限とします。"
          ]
        },
        {
          title: "規約の更新と利用停止",
          bullets: [
            "法令・セキュリティ・機能変更に応じて規約を更新することがあります。",
            "更新後に利用を継続した場合、改定規約に同意したものとします。",
            "重大な違反がある場合、利用停止またはアクセス制限を行うことがあります。"
          ]
        }
      ]
    },
    privacy: {
      title: "プライバシーポリシー",
      intro:
        "本ポリシーは、BlueGuardがアプリ内で取り扱う情報の種類と、保護の考え方を説明するものです。",
      sections: [
        {
          title: "取得・処理する情報",
          bullets: [
            "ユーザー入力情報: トークン、パスワード項目、セキュアノート、ラベル、バックアップ関連情報。",
            "セキュリティ設定情報: ロック設定など、機能提供に必要な情報。",
            "購入状態: Appleから提供されるサブスクリプション権利情報。",
            "診断情報（任意）: クラッシュや性能イベント。品質改善目的で利用します。"
          ]
        },
        {
          title: "利用目的",
          bullets: [
            "認証コード生成、保管、検索、バックアップ復元などの基本機能提供。",
            "不正利用防止とセキュリティ維持。",
            "有料機能の提供管理と品質改善。"
          ]
        },
        {
          title: "保存と暗号化",
          bullets: [
            "機微情報は端末保護とアプリ内保護を前提に取り扱います。",
            "バックアップ機能利用時は、対応構成であれば送信前に暗号化します。",
            "端末コード、生体認証、復旧手段の管理はユーザー責任です。"
          ]
        },
        {
          title: "第三者提供",
          bullets: [
            "個人情報の販売は行いません。",
            "機能提供に必要な範囲でのみ、委託先に情報を取り扱わせる場合があります。",
            "法令に基づく要請や権利保護のため、開示が必要となる場合があります。"
          ]
        },
        {
          title: "保存期間",
          bullets: [
            "ユーザーデータは、削除または同期設定変更が行われるまで端末上に保持されます。",
            "クラウド保存期間は利用プロバイダとアカウント設定に依存します。",
            "診断情報は、不具合対応に必要な期間のみ保持します。"
          ]
        },
        {
          title: "ユーザーの選択",
          bullets: [
            "アプリ内でデータの編集・削除が可能です。",
            "同期や診断などの任意機能は、提供される設定で無効化できます。",
            "プライバシーに関する問い合わせはメールで受け付けます。"
          ]
        },
        {
          title: "児童と越境処理",
          bullets: [
            "法令上保護者同意が必要な年齢の児童向けサービスとしては設計していません。",
            "国外処理が発生する場合は、適用法に沿った保護措置を講じます。"
          ]
        },
        {
          title: "ポリシー更新",
          bullets: [
            "法令、技術、製品変更に応じて内容を改定することがあります。",
            "改定後は本ページに施行日とともに掲載します。"
          ]
        }
      ]
    }
  },
  pt: {
    common: {
      back: "Voltar ao site",
      effective: "Vigência",
      contactTitle: "Contato",
      contactDeveloper: "Desenvolvedor",
      contactStudio: "Estúdio",
      contactEmail: "Email"
    },
    terms: {
      title: "Termos de Uso",
      intro:
        "Estes Termos regulam o uso do BlueGuard Authenticator. Ao instalar ou usar o app, você concorda com estas condições.",
      sections: [
        {
          title: "Quem pode usar",
          bullets: [
            "Use o app em conformidade com a legislação aplicável e com as regras da plataforma.",
            "Se você não concordar com estes Termos, não deve utilizar o BlueGuard."
          ]
        },
        {
          title: "Escopo da licença",
          bullets: [
            "Você recebe uma licença limitada, não exclusiva e revogável para uso pessoal ou interno da empresa.",
            "Revenda, redistribuição, sublicenciamento e cópia comercial não autorizada são proibidos."
          ]
        },
        {
          title: "Condutas proibidas",
          bullets: [
            "É proibido tentar quebrar proteções de segurança ou fazer engenharia reversa do app.",
            "É proibido utilizar o app para fraude, abuso ou atividade ilegal.",
            "Não são permitidas ações que comprometam estabilidade e segurança do serviço."
          ]
        },
        {
          title: "Responsabilidade do usuário",
          bullets: [
            "Você é responsável pela segurança do dispositivo, biometria, senha e dados de recuperação.",
            "Perda de credenciais pode impedir a recuperação de conteúdo criptografado."
          ]
        },
        {
          title: "Assinaturas e cobrança",
          bullets: [
            "Recursos pagos podem ser oferecidos via Apple In-App Purchase.",
            "Cobrança, renovação, cancelamento e reembolso seguem as regras da Apple."
          ]
        },
        {
          title: "Propriedade intelectual",
          bullets: [
            "Software, design, textos e identidade do BlueGuard pertencem à SimHaDo Apps.",
            "Uso de marca e elementos visuais sem autorização escrita é proibido."
          ]
        },
        {
          title: "Garantias e limitação de responsabilidade",
          bullets: [
            "O app é fornecido no estado em que se encontra e conforme disponibilidade.",
            "Na medida permitida pela lei, não há responsabilidade por danos indiretos ou consequenciais.",
            "Quando aplicável, a responsabilidade total é limitada ao valor pago nos 12 meses anteriores."
          ]
        },
        {
          title: "Atualizações e encerramento",
          bullets: [
            "Os Termos podem ser atualizados por mudanças legais, técnicas ou de produto.",
            "Uso continuado após publicação de alterações implica aceitação da nova versão.",
            "Em caso de violação grave, o acesso pode ser suspenso ou encerrado."
          ]
        }
      ]
    },
    privacy: {
      title: "Política de Privacidade",
      intro:
        "Esta Política explica quais dados o BlueGuard processa e como protegemos as informações no contexto do app.",
      sections: [
        {
          title: "Categorias de dados",
          bullets: [
            "Dados inseridos pelo usuário: tokens, senhas, notas seguras, etiquetas e metadados de backup.",
            "Configurações de segurança: preferências de bloqueio e proteção necessárias ao funcionamento.",
            "Status de compra: dados de assinatura fornecidos pela Apple.",
            "Diagnóstico (opcional): eventos de falha e desempenho para melhoria de estabilidade."
          ]
        },
        {
          title: "Finalidade do uso",
          bullets: [
            "Fornecer recursos principais como geração de códigos, cofre e fluxos de backup/restauração.",
            "Manter mecanismos de proteção e prevenção de uso indevido.",
            "Validar acesso a recursos premium e evoluir a qualidade do produto."
          ]
        },
        {
          title: "Armazenamento e criptografia",
          bullets: [
            "Conteúdo sensível é tratado com proteção no dispositivo e salvaguardas no app.",
            "Com backup habilitado, a criptografia é aplicada antes da transmissão quando suportada.",
            "O usuário continua responsável por senha do aparelho, biometria e métodos de recuperação."
          ]
        },
        {
          title: "Compartilhamento",
          bullets: [
            "Não vendemos dados pessoais.",
            "Compartilhamento com operadores ocorre apenas quando necessário para funcionalidades solicitadas.",
            "Divulgação pode ocorrer por obrigação legal ou para proteção de direitos e segurança."
          ]
        },
        {
          title: "Retenção",
          bullets: [
            "Os dados permanecem no dispositivo até exclusão pelo usuário ou ativação de sincronização/backup.",
            "Retenção em nuvem depende do provedor e das configurações da sua conta.",
            "Dados de diagnóstico são mantidos pelo tempo necessário para suporte técnico e qualidade."
          ]
        },
        {
          title: "Direitos e controles",
          bullets: [
            "Você pode editar e apagar dados no app.",
            "Recursos opcionais de sincronização e diagnóstico podem ser desativados quando houver controle disponível.",
            "Solicitações de privacidade podem ser enviadas por email."
          ]
        },
        {
          title: "Crianças e processamento internacional",
          bullets: [
            "O app não é direcionado a crianças em jurisdições que exigem consentimento parental específico.",
            "Se houver processamento internacional, aplicamos salvaguardas compatíveis com a legislação aplicável."
          ]
        },
        {
          title: "Atualizações da política",
          bullets: [
            "Podemos revisar esta Política por razões legais, técnicas ou de produto.",
            "Versões atualizadas serão publicadas nesta página com nova data de vigência."
          ]
        }
      ]
    }
  }
};

function getPageType() {
  const path = window.location.pathname.toLowerCase();
  return path.includes("privacy") ? "privacy" : "terms";
}

function renderLegal(lang) {
  const pageType = getPageType();
  const dict = legalCopy[lang] || legalCopy.en;
  const page = dict[pageType];
  const common = dict.common;

  document.documentElement.lang = lang;
  document.title = `BlueGuard - ${page.title}`;

  const backBtn = document.getElementById("legalBack");
  if (backBtn) backBtn.textContent = common.back;

  const container = document.getElementById("legalContent");
  if (!container) return;

  container.innerHTML = "";

  const title = document.createElement("h1");
  title.textContent = page.title;
  container.appendChild(title);

  const effective = document.createElement("p");
  effective.className = "legal-meta";
  effective.textContent = `${common.effective}: February 12, 2026`;
  container.appendChild(effective);

  const intro = document.createElement("p");
  intro.textContent = page.intro;
  container.appendChild(intro);

  page.sections.forEach((section, index) => {
    const h2 = document.createElement("h2");
    h2.textContent = `${index + 1}. ${section.title}`;
    container.appendChild(h2);

    const ul = document.createElement("ul");
    section.bullets.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
    container.appendChild(ul);
  });

  const contactTitle = document.createElement("h2");
  contactTitle.textContent = common.contactTitle;
  container.appendChild(contactTitle);

  const contact = document.createElement("p");
  contact.innerHTML = `${common.contactDeveloper}: Danyil Skrypnichenko<br>${common.contactStudio}: SimHaDo Apps<br>${common.contactEmail}: <a href=\"mailto:quicktasksup@gmail.com\">quicktasksup@gmail.com</a>`;
  container.appendChild(contact);
}

const langSelect = document.getElementById("lang");
const savedLang = localStorage.getItem("blueguard_lang");
const initialLang = supportedLangs.includes(savedLang) ? savedLang : resolveDeviceLanguage();

if (langSelect) {
  langSelect.value = initialLang;
  renderLegal(initialLang);

  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    localStorage.setItem("blueguard_lang", lang);
    renderLegal(lang);
  });
} else {
  renderLegal(initialLang);
}
