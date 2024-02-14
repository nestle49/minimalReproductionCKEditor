export interface MenuItem {
    name: string
    routeName?: string
    icon?: string
    id: string
    href?: string
    children?: MenuItem[]
}

export const menu: MenuItem[] = [
    {
        name: 'Рабочее пространство',
        icon: 'gear',
        id: 'workspace',
        children: [
            {
                name: 'Менеджеры по продажам',
                id: 'sales-managers',
                children: [
                    {
                        name: 'Недобросовестные филиалы',
                        href: '/pa.admin/cabinet/suspicious_branches',
                        id: 'suspicious-branches'
                    },
                    {
                        name: 'Распределение городов',
                        href: '/pa.admin/cabinet/distribution_cities',
                        id: 'distribution-cities'
                    },
                    {
                        name: 'Должники',
                        href: '/pa.admin/cabinet/debtors',
                        id: 'debtors'
                    }
                ]
            },
            {
                name: 'База данных',
                id: 'database',
                children: [
                    {
                        name: 'Названия стран',
                        href: '/pa.admin/cabinet/base_countries_names',
                        id: 'base-countries-names'
                    },
                    {
                        name: 'Настройки стран',
                        href: '/pa.admin/cabinet/base_countries_settings',
                        id: 'base-countries-settings'
                    },
                    {
                        name: 'Города',
                        href: '/pa.admin/cabinet/base_cities',
                        id: 'base-cities'
                    },
                    {
                        name: 'Праздничные дни',
                        href: '/pa.admin/cabinet/base_holiday_dates',
                        id: 'base-holidays-dates'
                    },
                    {
                        name: 'Типы контрагентов',
                        href: '/pa.admin/cabinet/base_contractors_types',
                        id: 'base-contractors-types'
                    },
                    {
                        name: 'Поля заполнения контрагентами',
                        href: '/pa.admin/cabinet/base_contractors_fields',
                        id: 'base-contractors-fields'
                    },
                    {
                        name: 'Идентификаторы компаний для пропуска синхронизации счетов',
                        href: '/pa.admin/cabinet/base_invoices_synchronization_ids_skip',
                        id: 'base-invoices-synchronization-ids-skip'
                    },
                    {
                        name: 'Система налогооблажения',
                        href: '/pa.admin/cabinet/base_taxations',
                        id: 'base-taxations'
                    },
                    {
                        name: 'Юридические лица',
                        href: '/pa.admin/cabinet/base_companies',
                        id: 'base-companies'
                    }
                ]
            },
            {
                name: 'Служебные настройки продуктов',
                id: 'products-service-settings',
                children: [
                    {
                        name: 'Выпуск продуктов',
                        href: '/pa.admin/cabinet/products_releases',
                        id: 'products-releases'
                    },
                    {
                        name: 'Устройства для разработки и тестирования',
                        href: '/pa.admin/cabinet/mobile_apps_developer_devices',
                        id: 'mobile-apps-developer-devices'
                    },
                    {
                        name: 'Android хранилища ключей',
                        href: '/pa.admin/cabinet/mobile_apps_android_key_stores',
                        id: 'mobile-apps-android-key-stores'
                    },
                    {
                        name: 'Настройки версий продуктов',
                        href: '/pa.admin/cabinet/products_versions_settings',
                        id: 'products-versions-settings'
                    },
                    {
                        name: 'Список приложений для проверки маркетологом',
                        href: '/pa.admin/cabinet/mobile_apps_marketer_list',
                        id: 'mobile-apps-marketer-list'
                    },
                    {
                        name: 'Список приложений для проверки дизайнером',
                        href: '/pa.admin/cabinet/mobile_apps_designer_list',
                        id: 'mobile-apps-designer-list'
                    },
                    {
                        name: 'Тестовые приложения',
                        href: '/pa.admin/cabinet/mobile_apps_test_apps',
                        id: 'mobile-apps-test-apps'
                    },
                    {
                        name: 'Запрещенные слова',
                        href: '/pa.admin/cabinet/forbidden_words',
                        id: 'forbidden-words'
                    }
                ]
            },
            {
                name: 'Настройки iOS приложений',
                id: 'ios-apps-settings',
                children: [
                    {
                        name: 'Проверка выпуска приложений',
                        href: '/pa.admin/cabinet/mobile_apps_ios_check',
                        id: 'mobile-apps-ios-check'
                    },
                    {
                        name: 'Очереди выпуска приложений',
                        href: '/pa.admin/cabinet/mobile_apps_ios_queues',
                        id: 'mobile-apps-ios-queues'
                    },
                    {
                        name: 'Аккаунты',
                        href: '/pa.admin/cabinet/mobile_apps_ios_accounts',
                        id: 'mobile-apps-ios-accounts'
                    },
                    {
                        name: 'Авторизация по смс',
                        href: '/pa.admin/cabinet/mobile_apps_ios_authorization_codes',
                        id: 'mobile-apps-ios-authorization-codes'
                    },
                    {
                        name: 'Устройства для тестирования',
                        href: '/pa.admin/cabinet/mobile_apps_ios_test_devices',
                        id: 'mobile-apps-ios-test-devices'
                    }
                ]
            },
            {
                name: 'Настройки Google приложений',
                id: 'google-apps-settings',
                children: [
                    {
                        name: 'Очереди выпуска приложений',
                        href: '/pa.admin/cabinet/mobile_apps_android_google_queues',
                        id: 'mobile-apps-android-google-queues'
                    },
                    {
                        name: 'Аккаунты',
                        href: '/pa.admin/cabinet/mobile_apps_android_google_accounts',
                        id: 'mobile-apps-android-google-accounts'
                    }
                ]
            },
            {
                name: 'Настройки Huawei приложений',
                id: 'huawei-apps-settings',
                children: [
                    {
                        name: 'Очереди выпуска приложений',
                        href: '/pa.admin/cabinet/mobile_apps_android_huawei_queues',
                        id: 'mobile-apps-android-huawei-queues'
                    },
                    {
                        name: 'Аккаунты',
                        href: '/pa.admin/cabinet/mobile_apps_android_huawei_accounts',
                        id: 'mobile-apps-android-huawei-accounts'
                    }
                ]
            },
            {
                name: 'Фоновые картинки',
                id: 'background-images',
                children: [
                    {
                        name: 'Мобильные приложения',
                        href: '/pa.admin/cabinet/mobile_apps_backgrounds',
                        id: 'mobile-apps-backgrounds'
                    },
                    {
                        name: 'Скрипт для мобильных приложений',
                        href: '/pa.admin/cabinet/promoter_script_backgrounds',
                        id: 'promoter-script-backgrounds'
                    },
                    {
                        name: 'Письмо - Еда - Заголовок',
                        href: '/pa.admin/cabinet/mail_head_food_and_drink_backgrounds',
                        id: 'mail-head-food-and-drink-backgrounds'
                    },
                    {
                        name: 'Письмо - Еда - Контент',
                        href: '/pa.admin/cabinet/mail_body_food_and_drink_backgrounds',
                        id: 'mail-body-food-and-drink-backgrounds'
                    },
                    {
                        name: 'Письмо - Цветы - Заголовок',
                        href: '/pa.admin/cabinet/mail_head_flowers_backgrounds',
                        id: 'mail-head-flowers-backgrounds'
                    },
                    {
                        name: 'Письмо - Цветы - Контент',
                        href: '/pa.admin/cabinet/mail_body_flowers_backgrounds',
                        id: 'mail-body-flowers-backgrounds'
                    }
                ]
            },
            {
                name: 'Новостной менеджер',
                href: '/pa.admin/cabinet/news_manager',
                id: 'news-manager',
                children: []
            },
            {
                name: 'Смс',
                id: 'sms',
                children: [
                    {
                        name: 'Сообщения',
                        href: '/pa.admin/cabinet/sms_messages',
                        id: 'sms-messages'
                    },
                    {
                        name: 'Динамика',
                        href: '/pa.admin/cabinet/sms_dynamics?date_from=31%2F07%2F2023&date_to=28%2F08%2F2023',
                        id: 'sms-dynamics'
                    }
                ]
            },
            {
                name: 'Системные IP адреса',
                href: '/pa.admin/cabinet/system_ip_addresses',
                id: 'system-ip-addresses',
                children: []
            },
            {
                name: 'Сертификаты для локальной сети',
                href: '/pa.admin/cabinet/lan_certificates',
                id: 'lan-certificates',
                children: []
            },
            {
                name: 'Телефония',
                id: 'telephony',
                children: [
                    {
                        name: 'Статусы линий',
                        href: '/pa.admin/cabinet/telephony_line_statuses',
                        id: 'telephony-line-statuses'
                    },
                    {
                        name: 'Шлюзы',
                        href: '/pa.admin/cabinet/telephony_gsm_gateways_hosts',
                        id: 'telephony-gsm-gateways-hosts'
                    },
                    {
                        name: 'Порты',
                        href: '/pa.admin/cabinet/telephony_gsm_gateways_ports',
                        id: 'telephony-gsm-gateways-ports'
                    },
                    {
                        name: 'Форматы номеров',
                        href: '/pa.admin/cabinet/telephony_formats',
                        id: 'telephony-formats'
                    },
                    {
                        name: 'Операторы связи',
                        href: '/pa.admin/cabinet/telephony_operators',
                        id: 'telephony-operators'
                    },
                    {
                        name: 'Маршрутизация',
                        href: '/pa.admin/cabinet/telephony_routes',
                        id: 'telephony-routes'
                    }
                ]
            },
            {
                name: 'Локализация',
                id: 'localization',
                children: [
                    {
                        name: 'Языки',
                        href: '/pa.admin/cabinet/languages',
                        id: 'languages'
                    },
                    {
                        name: 'Переводы',
                        href: '/pa.admin/cabinet/language_constructor_keys',
                        id: 'language-constructor-keys'
                    },
                    {
                        name: 'Файлы',
                        href: '/pa.admin/cabinet/language_constructor_files',
                        id: 'language-constructor-files'
                    },
                    {
                        name: 'Статистика',
                        href: '/pa.admin/cabinet/language_statistics?date_from=01%2F08%2F2023&date_to=31%2F08%2F2023',
                        id: 'language-statistics'
                    }
                ]
            },
            {
                name: 'Партнерская программа',
                id: 'affiliate',
                children: [
                    {
                        name: 'Партнеры',
                        href: '/pa.admin/cabinet/affiliate_users',
                        id: 'affiliate-users'
                    },
                    {
                        name: 'Подключенные компании',
                        href: '/pa.admin/cabinet/affiliate_companies',
                        id: 'affiliate-companies'
                    },
                    {
                        name: 'Начисление средств',
                        href: '/pa.admin/cabinet/affiliate_reports?date_from=28%2F08%2F2023&page=1',
                        id: 'affiliate-reports'
                    },
                    {
                        name: 'Вывод средств',
                        href: '/pa.admin/cabinet/affiliate_withdraw',
                        id: 'affiliate-withdraw'
                    },
                    {
                        name: 'IP адреса',
                        href: '/pa.admin/cabinet/affiliate_ip_addresses',
                        id: 'affiliate-ip-addresses'
                    },
                    {
                        name: 'Контрагент',
                        href: '/pa.admin/cabinet/affiliate_contractor',
                        id: 'affiliate-contractor'
                    }
                ]
            },
            {
                name: 'Ценообразование',
                id: 'finance',
                children: [
                    {
                        name: 'Минимальные суммы',
                        href: '/pa.admin/cabinet/finance_minimum_sums',
                        id: 'finance-minimum-sums'
                    },
                    {
                        name: 'Цены продуктов для компаний',
                        href: '/pa.admin/cabinet/finance_firms_prices',
                        id: 'finance-firms-prices'
                    },
                    {
                        name: 'Стоимость маркетинговых тарифов',
                        href: '/pa.admin/cabinet/finance_marketing_prices',
                        id: 'finance-marketing-prices'
                    },
                    {
                        name: 'Тарифная карта компаний',
                        href: '/pa.admin/cabinet/finance_firms_rates',
                        id: 'finance-firms-rates'
                    },
                    {
                        name: 'Тарифная карта партнеров',
                        href: '/pa.admin/cabinet/finance_affiliate_rates',
                        id: 'finance-affiliate-rates'
                    }
                ]
            },
            {
                name: 'Рейтинг фирм',
                href: '/pa.admin/cabinet/rating_firms',
                id: 'rating-firms',
                children: []
            },
            {
                name: 'Реклама',
                href: '/pa.admin/cabinet/advertising',
                id: 'advertising',
                children: []
            },
            {
                name: 'Пользователи',
                href: '/pa.admin/cabinet/system_users',
                id: 'system-users',
                children: []
            },
            {
                name: 'Управление кадрами',
                id: 'management-personal',
                children: [
                    {
                        name: 'Вакансии',
                        routeName: 'Vacancies',
                        href: '/pa.admin/cabinet/base_vacancies',
                        id: 'base-vacancies'
                    },
                    {
                        name: 'Кандидаты',
                        routeName: 'Candidates',
                        href: '/pa.admin/cabinet/base_candidates',
                        id: 'base-candidates'
                    }
                ]
            },
            {
                name: 'Офисы',
                id: 'offices',
                children: [
                    {
                        name: 'Калининград',
                        href: '/pa.admin/cabinet/office_kgd',
                        id: 'office-kgd'
                    },
                    {
                        name: 'Тайный Cанта',
                        href: '/pa.admin/cabinet/secret_santa',
                        id: 'secret-santa'
                    }
                ]
            },
            {
                name: 'Настройки аккаунта',
                href: '/pa.admin/cabinet/account_settings',
                id: 'account-settings',
                children: []
            }
        ]
    },
    {
        name: 'Настройки',
        icon: 'gear',
        id: 'settings',
        children: [
            {
                name: 'Аккаунты',
                id: 'accounts',
                children: [
                    {
                        name: 'Список аккаунтов',
                        href: '/pa.admin/cabinet/accounts_list',
                        id: 'accounts-list'
                    },
                    {
                        name: 'История статусов',
                        href: '/pa.admin/cabinet/accounts_statuses_history',
                        id: 'accounts-statuses-history'
                    }
                ]
            },
            {
                name: 'Сети',
                href: '/pa.admin/cabinet/chains',
                id: 'chains',
                children: []
            },
            {
                name: 'Сортировка городов',
                routeName: 'CitiesSort',
                href: '/pa.admin/cabinet/cities_sort',
                id: 'cities-sort',
                children: []
            },
            {
                name: 'Филиалы',
                routeName: 'Branches',
                href: '/pa.admin/cabinet/branches',
                id: 'branches',
                children: []
            },
            {
                name: 'Операторы',
                routeName: 'SettingsOperators',
                href: '/pa.admin/cabinet/operators',
                id: 'operators',
                children: []
            },
            {
                name: 'Районы',
                id: 'districts',
                children: [
                    {
                        name: 'Список',
                        href: '/pa.admin/cabinet/districts_list',
                        id: 'districts-list'
                    },
                    {
                        name: 'Карта',
                        href: '/pa.admin/cabinet/districts_map',
                        id: 'districts-map'
                    }
                ]
            },
            {
                name: 'Курьеры',
                id: 'couriers',
                children: [
                    {
                        name: 'Список',
                        href: '/pa.admin/cabinet/couriers_list',
                        routeName: 'CouriersList',
                        id: 'couriers-list'
                    },
                    {
                        name: 'На карте в реальном времени',
                        href: '/pa.admin/cabinet/couriers_map_real_time',
                        id: 'couriers-map-real-time'
                    }
                ]
            },
            {
                name: 'Самовывоз',
                routeName: 'Pickup',
                href: '/pa.admin/cabinet/pickup',
                id: 'pickup',
                children: []
            },
            {
                name: 'Номенклатура',
                id: 'nomenclature',
                children: [
                    {
                        name: 'Группы модификаторов',
                        routeName: 'ModifiersGroups',
                        href: '/pa.admin/cabinet/modifiers_groups',
                        id: 'modifiers-groups'
                    },
                    {
                        name: 'Модификаторы',
                        routeName: 'NomenclatureModifiers',
                        href: '/pa.admin/cabinet/modifiers',
                        id: 'modifiers'
                    },
                    {
                        name: 'Категории',
                        href: '/pa.admin/cabinet/categories',
                        routeName: 'NomenclatureCategories',
                        id: 'categories'
                    },
                    {
                        name: 'Лейблы для товаров',
                        href: '/pa.admin/cabinet/labels',
                        routeName: 'ItemsLabels',
                        id: 'labels'
                    },
                    {
                        name: 'Товары',
                        routeName: 'Items',
                        href: '/pa.admin/cabinet/items',
                        id: 'items'
                    },
                    {
                        name: 'Складские остатки',
                        routeName: 'StockBalance',
                        href: '/pa.admin/cabinet/stock_balance',
                        id: 'stock-balance'
                    },
                    {
                        name: 'Описание параметров для товаров',
                        routeName: 'ItemsDescriptions',
                        href: '/pa.admin/cabinet/items_descriptions',
                        id: 'items-descriptions'
                    }
                ]
            },
            {
                name: 'Бонусная система',
                href: '/pa.admin/cabinet/bonuses_settings',
                routeName: 'BonusesSettings',
                id: 'bonuses-settings',
                children: []
            },
            {
                name: 'Акции',
                id: 'special-offers',
                children: [
                    {
                        name: 'Список',
                        routeName: 'SpecialOffers',
                        href: '/pa.admin/cabinet/special_offers_list',
                        id: 'special-offers-list'
                    },
                    {
                        name: 'Промо-коды',
                        routeName: 'PromoCodes',
                        href: '/pa.admin/cabinet/special_offers_promo_codes',
                        id: 'special-offers-promo-codes'
                    }
                ]
            },
            {
                name: 'Операции с филиалами',
                routeName: 'BranchesActions',
                href: '/pa.admin/cabinet/branches_actions',
                id: 'branches-actions',
                children: []
            },
            {
                name: 'Подключение к сетям',
                href: '/pa.admin/cabinet/connection_to_chains',
                routeName: 'ConnectionToChains',
                id: 'connection-to-chains',
                children: []
            },
            {
                name: 'IP адреса',
                href: '/pa.admin/cabinet/ip_addresses',
                routeName: 'IPAddresses',
                id: 'ip-addresses',
                children: []
            },
            {
                name: 'Управление кадрами',
                id: 'personnel-management',
                children: [
                    {
                        name: 'Вакансии',
                        routeName: 'Vacancies',
                        href: '/pa.admin/cabinet/vacancies',
                        id: 'vacancies'
                    },
                    {
                        name: 'Кандидаты',
                        routeName: 'Candidates',
                        href: '/pa.admin/cabinet/candidates',
                        id: 'candidates'
                    }
                ]
            }
        ]
    },
    {
        name: 'Интеграции',
        icon: 'integration',
        id: 'integrations',
        children: [
            {
                name: 'Геокодинг',
                routeName: 'IntegrationGeocodings',
                href: '/pa.admin/cabinet/integration_geocodings',
                id: 'integration-geocodings',
                children: []
            },
            {
                name: 'Автоматизация',
                routeName: 'IntegrationAutomation',
                href: '/pa.admin/cabinet/integration_automation',
                id: 'integration-automation',
                children: []
            },
            {
                name: 'Чеки / Квитанции',
                routeName: 'ChecksReceipts',
                href: '/pa.admin/cabinet/checks-receipts',
                id: 'checks-receipts',
                children: []
            },
            {
                name: 'Платежные системы',
                id: 'payments-systems',
                children: [
                    {
                        name: 'Настройки',
                        href: '/pa.admin/cabinet/integration_payments',
                        routeName: 'IntegrationPayments',
                        id: 'integration-payments'
                    },
                    {
                        name: 'Сертификаты',
                        routeName: 'IntegrationCertificates',
                        href: '/pa.admin/cabinet/integration_payment_certificates',
                        id: 'integration-payment-certificates'
                    }
                ]
            },
            {
                name: 'Чаты',
                href: '/pa.admin/cabinet/integration_chats',
                id: 'integrations-chats',
                children: []
            },
            {
                name: 'СМС сервисы',
                routeName: 'IntegrationSms',
                href: '/pa.admin/cabinet/integration_sms',
                id: 'integration-sms'
            },
            {
                name: 'Телеграм',
                id: 'telegram',
                children: [
                    {
                        name: 'Баланс, счета и акты',
                        routeName: 'TelegramSystem',
                        href: '/pa.admin/cabinet/telegram_system',
                        id: 'telegram-system'
                    },
                    {
                        name: 'Заказы',
                        href: '/pa.admin/cabinet/telegram_orders',
                        id: 'telegram-orders',
                        routeName: 'TelegramOrders'
                    },
                    {
                        name: 'Отзывы',
                        href: '/pa.admin/cabinet/telegram_feedback',
                        id: 'telegram-feedback',
                        routeName: 'TelegramFeedback'
                    }
                ]
            },
            {
                name: 'Карта',
                routeName: 'IntegrationMaps',
                href: '/pa.admin/cabinet/integration_maps',
                id: 'integration-maps',
                children: []
            }
        ]
    },
    {
        name: 'Управление сайтами и приложениями',
        icon: 'range',
        id: 'management-site-and-apps',
        children: [
            {
                name: 'Сайты',
                id: 'sites',
                children: [
                    {
                        name: 'Шаблоны',
                        href: '/pa.admin/cabinet/sites_templates',
                        routeName: 'SitesTemplates',
                        id: 'sites-templates'
                    },
                    {
                        name: 'Домены',
                        routeName: 'SiteDomains',
                        href: '/pa.admin/cabinet/sites_domains',
                        id: 'sites-domains'
                    },
                    {
                        name: 'Переадресации',
                        routeName: 'SitesRedirects',
                        href: '/pa.admin/cabinet/sites_redirects',
                        id: 'sites-redirects'
                    },
                    {
                        name: 'SEO Страниц',
                        routeName: 'SitesSeo',
                        href: '/pa.admin/cabinet/sites_seo_pages',
                        id: 'sites-seo-pages'
                    },
                    {
                        name: 'SEO Категорий',
                        routeName: 'CategoriesSeo',
                        href: '/pa.admin/cabinet/sites_seo_categories',
                        id: 'sites-seo-categories'
                    },
                    {
                        name: 'SEO Товаров',
                        routeName: 'ItemsSeo',
                        href: '/pa.admin/cabinet/sites_seo_items',
                        id: 'sites-seo-items'
                    },
                    {
                        name: 'Настройки',
                        routeName: 'SitesSettings',
                        href: '/pa.admin/cabinet/sites_settings',
                        id: 'sites-settings'
                    }
                ]
            },
            {
                name: 'Мультиссылки',
                id: 'multilinks',
                children: [
                    {
                        name: 'Ссылки',
                        routeName: 'MultilinksList',
                        href: '/pa.admin/cabinet/multilinks_list',
                        id: 'multilinks-list'
                    },
                    {
                        name: 'Кнопки',
                        routeName: 'MultilinksButtons',
                        href: '/pa.admin/cabinet/multilinks_buttons',
                        id: 'multilinks-buttons'
                    },
                    {
                        name: 'Настройки',
                        routeName: 'MultilinksSettings',
                        href: '/pa.admin/cabinet/multilinks_settings',
                        id: 'multilinks-settings'
                    }
                ]
            },
            {
                name: 'Мобильные приложения',
                id: 'mobile-apps',
                children: [
                    {
                        name: 'Скрипт продвижения',
                        href: '/pa.admin/cabinet/mobile_apps_promoter_script',
                        id: 'mobile-apps-promoter-script'
                    },
                    {
                        name: 'QR Коды',
                        routeName: 'QrCodes',
                        href: '/pa.admin/cabinet/mobile_apps_qrs',
                        id: 'mobile-apps-qrs'
                    },
                    {
                        name: 'Иконки',
                        href: '/pa.admin/cabinet/mobile_apps_icons',
                        id: 'mobile-apps-icons'
                    },
                    {
                        name: 'Аналитика',
                        routeName: 'MobileAppsAnalytics',
                        href: '/pa.admin/cabinet/mobile_apps_analytics',
                        id: 'mobile-apps-analytics'
                    },
                    {
                        name: 'Настройки',
                        routeName: 'MobileAppsSettings',
                        href: '/pa.admin/cabinet/mobile_apps_settings',
                        id: 'mobile-apps-settings'
                    }
                ]
            },
            {
                name: 'Социальные приложения',
                routeName: 'SocialApps',
                href: '/pa.admin/cabinet/social_apps',
                id: 'social-apps',
                children: []
            },
            {
                name: 'Общие настройки',
                href: '/pa.admin/cabinet/base_settings',
                id: 'base-settings',
                children: [],
                routeName: 'BaseSettings'
            },
            {
                name: 'Push рассылки',
                href: '/pa.admin/cabinet/push_notifications',
                routeName: 'PushNotifications',
                id: 'push-notifications',
                children: []
            }
        ]
    },
    {
        name: 'Информация',
        id: 'information',
        icon: 'info',
        children: [
            {
                name: 'Заказы',
                href: '/pa.admin/cabinet/orders?date_creation_from=28%2F08%2F2023&page=1',
                id: 'orders',
                children: []
            },
            {
                name: 'Транзакции',
                routeName: 'Transactions',
                href: '/pa.admin/cabinet/transactions',
                id: 'transactions',
                children: []
            },
            {
                name: 'Отзывы',
                href: '/pa.admin/cabinet/feedback',
                id: 'feedback',
                children: []
            },
            {
                name: 'Статистика',
                href: '/pa.admin/cabinet/statistics?date_creation_from=28%2F08%2F2023',
                id: 'statistics',
                children: []
            },
            {
                name: 'Динамика',
                id: 'dynamics',
                children: [
                    {
                        name: 'Заказы',
                        href: '/pa.admin/cabinet/order_dynamics?date_creation_from=31%2F07%2F2023&date_creation_to=28%2F08%2F2023',
                        id: 'order-dynamics'
                    },
                    {
                        name: 'Скачивание приложений',
                        href: '/pa.admin/cabinet/application_download_dynamics?date_from=31%2F07%2F2023&date_to=28%2F08%2F2023',
                        id: 'application-download-dynamics'
                    }
                ]
            },
            {
                name: 'Клиенты',
                id: 'clients',
                children: [
                    {
                        name: 'Аккаунты',
                        href: '/pa.admin/cabinet/clients_accounts',
                        id: 'clients-accounts'
                    },
                    {
                        name: 'Управление бонусами',
                        href: '/pa.admin/cabinet/clients_bonuses',
                        id: 'clients-bonuses'
                    },
                    {
                        name: 'Адреса',
                        routeName: 'Addresses',
                        href: '/pa.admin/cabinet/clients_addresses',
                        id: 'clients-addresses'
                    },
                    {
                        name: 'Импорт',
                        href: '/pa.admin/cabinet/clients_import',
                        id: 'clients-import'
                    }
                ]
            },
            {
                name: 'Черный список',
                routeName: 'BlackList',
                href: '/pa.admin/cabinet/black_list',
                id: 'black-list',
                children: []
            }
        ]
    },
    {
        name: 'Управление бухгалтерией',
        icon: 'bank',
        id: 'accounting',
        children: [
            {
                name: 'Платежи',
                routeName: 'Payments',
                href: '/pa.admin/cabinet/payments',
                id: 'payments',
                children: []
            },
            {
                name: 'Отчеты',
                href: '/pa.admin/cabinet/reports?date_from=28%2F08%2F2023&page=1',
                id: 'reports',
                children: []
            },
            {
                name: 'Счета',
                routeName: 'Invoices',
                href: '/pa.admin/cabinet/invoices',
                id: 'invoices',
                children: []
            },
            {
                name: 'Синхронизация счетов',
                href: '/pa.admin/cabinet/invoices_synchronization',
                id: 'invoices-synchronization',
                children: []
            },
            {
                name: 'Акты',
                routeName: 'Acts',
                href: '/pa.admin/cabinet/acts',
                id: 'acts',
                children: []
            },
            {
                name: 'Контрагенты',
                routeName: 'Contractors',
                href: '/pa.admin/cabinet/contractors',
                id: 'contractors',
                children: []
            },
            {
                name: 'Курсы валют',
                href: '/pa.admin/cabinet/exchange_rates',
                id: 'exchange-rates',
                children: []
            }
        ]
    },
    {
        name: 'Логи',
        icon: 'folder',
        id: 'folder',
        children: [
            {
                name: 'Заказы',
                href: '/pa.admin/cabinet/log_orders',
                id: 'log-orders',
                children: []
            },
            {
                name: 'Действия',
                href: '/pa.admin/cabinet/log_actions',
                id: 'log-actions',
                children: []
            },
            {
                name: 'Автоматизация',
                href: '/pa.admin/cabinet/log_automations',
                id: 'log-automations',
                children: []
            },
            {
                name: 'СМС',
                routeName: 'SmsLogs',
                href: '/pa.admin/cabinet/log_sms',
                id: 'log-sms',
                children: []
            },
            {
                name: 'Авторизации',
                href: '/pa.admin/cabinet/log_authorizations',
                id: 'log-authorizations',
                children: []
            }
        ]
    },
    {
        name: 'Техподдержка',
        icon: 'gear', // TODO: temporary, replace later
        id: 'support',
        children: [
            {
                name: 'Заявки',
                href: '/pa.admin/cabinet/tickets',
                id: 'tickets',
                children: []
            },
            {
                name: 'Голосование',
                href: '/pa.admin/cabinet/poll',
                id: 'poll',
                children: []
            }
        ]
    },
    {
        name: 'Документация/WIKI',
        icon: 'gear', // TODO: temporary, replace later
        href: 'https://wiki.foodsoul.dev',
        id: 'doc-wiki',
        children: []
    },
    {
        name: 'Аккаунт',
        routeName: 'AccountSettings',
        icon: 'profile',
        href: 'https://wiki.foodsoul.dev',
        id: 'account',
        children: []
    }
]
