const menu = [
    {
        name: 'Новости',
        href: '/pa.partner/cabinet/news',
        children: []
    },
    {
        name: 'Настройки',
        children: [
            {
                name: 'Сети',
                href: '/pa.partner/cabinet/chains',
                children: []
            },
            {
                name: 'Сортировка городов',
                routeName: 'CitiesSort',
                href: '/pa.partner/cabinet/cities_sort',
                children: []
            },
            {
                name: 'Филиалы',
                routeName: 'Branches',
                href: '/pa.partner/cabinet/branches',
                children: []
            },
            {
                name: 'Операторы',
                href: '/pa.partner/cabinet/operators',
                children: []
            },
            {
                name: 'Районы',
                children: [
                    {
                        name: 'Список',
                        href: '/pa.partner/cabinet/districts_list'
                    },
                    {
                        name: 'Карта',
                        href: '/pa.partner/cabinet/districts_map'
                    }
                ]
            },
            {
                name: 'Курьеры',
                children: [
                    {
                        name: 'Список',
                        href: '/pa.partner/cabinet/couriers_list'
                    },
                    {
                        name: 'На карте в реальном времени',
                        href: '/pa.partner/cabinet/couriers_map_real_time'
                    }
                ]
            },
            {
                name: 'Самовывоз',
                routeName: 'Pickup',
                href: '/pa.partner/cabinet/pickup',
                children: []
            },
            {
                name: 'Номенклатура',
                children: [
                    {
                        name: 'Группы модификаторов',
                        routeName: 'ModifiersGroups',
                        href: '/pa.partner/cabinet/modifiers_groups'
                    },
                    {
                        name: 'Модификаторы',
                        routeName: 'NomenclatureModifiers',
                        href: '/pa.partner/cabinet/modifiers'
                    },
                    {
                        name: 'Категории',
                        routeName: 'NomenclatureCategories',
                        href: '/pa.partner/cabinet/categories'
                    },
                    {
                        name: 'Лейблы для товаров',
                        href: '/pa.partner/cabinet/labels',
                        routeName: 'ItemsLabels'
                    },
                    {
                        name: 'Товары',
                        routeName: 'Items',
                        href: '/pa.partner/cabinet/items'
                    },
                    {
                        name: 'Складские остатки',
                        routeName: 'StockBalance',
                        href: '/pa.partner/cabinet/stock_balance'
                    },
                    {
                        name: 'Описание параметров для товаров',
                        href: '/pa.partner/cabinet/items_descriptions',
                        routeName: 'ItemsDescriptions'
                    }
                ]
            },
            {
                name: 'Бонусная система',
                href: '/pa.partner/cabinet/bonuses_settings',
                routeName: 'BonusesSettings',
                children: []
            },
            {
                name: 'Акции',
                children: [
                    {
                        name: 'Список',
                        routeName: 'SpecialOffers',
                        href: '/pa.partner/cabinet/special_offers_list'
                    },
                    {
                        name: 'Промо-коды',
                        routeName: 'PromoCodes',
                        href: '/pa.partner/cabinet/special_offers_promo_codes'
                    }
                ]
            },
            {
                name: 'Операции с филиалами',
                href: '/pa.partner/cabinet/branches_actions',
                children: []
            },
            {
                name: 'Подключение к сетям',
                href: '/pa.partner/cabinet/connection_to_chains',
                routeName: 'ConnectionToChains',
                children: []
            },
            {
                name: 'IP адреса',
                href: '/pa.partner/cabinet/ip_addresses',
                children: []
            },
            {
                name: 'Управление кадрами',
                children: [
                    {
                        name: 'Вакансии',
                        routeName: 'Vacancies',
                        href: '/pa.partner/cabinet/vacancies'
                    },
                    {
                        name: 'Кандидаты',
                        routeName: 'Candidates',
                        href: '/pa.partner/cabinet/candidates'
                    }
                ]
            }
        ]
    },
    {
        name: 'Интеграции',
        children: [
            {
                name: 'Геокодинг',
                href: '/pa.partner/cabinet/integration_geocodings',
                children: []
            },
            {
                name: 'Автоматизация',
                href: '/pa.partner/cabinet/integration_automation',
                children: []
            },
            {
                name: 'Платежные системы',
                children: [
                    {
                        name: 'Настройки',
                        routeName: 'IntegrationPayments',
                        href: '/pa.partner/cabinet/integration_payments'
                    },
                    {
                        name: 'Сертификаты',
                        href: '/pa.partner/cabinet/integration_payment_certificates'
                    }
                ]
            },
            {
                name: 'Чаты',
                routeName: 'IntegrationChats',
                href: '/pa.partner/cabinet/integration_chats',
                children: []
            },
            {
                name: 'СМС сервисы',
                href: '/pa.partner/cabinet/integration_sms',
                children: []
            },
            {
                name: 'Телеграм',
                children: [
                    {
                        name: 'Баланс, счета и акты',
                        href: '/pa.partner/cabinet/telegram_system'
                    },
                    {
                        name: 'Заказы',
                        href: '/pa.partner/cabinet/telegram_orders',
                        routeName: 'TelegramOrders'
                    },
                    {
                        name: 'Отзывы',
                        href: '/pa.partner/cabinet/telegram_feedback',
                        routeName: 'TelegramFeedback'
                    }
                ]
            },
            {
                name: 'Карта',
                href: '/pa.partner/cabinet/integration_maps',
                children: []
            }
        ]
    },
    {
        name: 'Управление сайтами и приложениями',
        children: [
            {
                name: 'Сайты',
                children: [
                    {
                        name: 'Домены',
                        routeName: 'SiteDomains',
                        href: '/pa.partner/cabinet/sites_domains'
                    },
                    {
                        name: 'Переадресации',
                        href: '/pa.partner/cabinet/sites_redirects'
                    },
                    {
                        name: 'SEO Страниц',
                        routeName: 'SitesSeo',
                        href: '/pa.partner/cabinet/sites_seo_pages'
                    },
                    {
                        name: 'SEO Категорий',
                        routeName: 'CategoriesSeo',
                        href: '/pa.partner/cabinet/sites_seo_categories'
                    },
                    {
                        name: 'SEO Товаров',
                        routeName: 'ItemsSeo',
                        href: '/pa.partner/cabinet/sites_seo_items'
                    },
                    {
                        name: 'Настройки',
                        href: '/pa.partner/cabinet/sites_settings'
                    }
                ]
            },
            {
                name: 'Мультиссылки',
                children: [
                    {
                        name: 'Ссылки',
                        href: '/pa.partner/cabinet/multilinks_list'
                    },
                    {
                        name: 'Кнопки',
                        href: '/pa.partner/cabinet/multilinks_buttons'
                    },
                    {
                        name: 'Настройки',
                        href: '/pa.partner/cabinet/multilinks_settings'
                    }
                ]
            },
            {
                name: 'Мобильные приложения',
                children: [
                    {
                        name: 'Скрипт продвижения',
                        routeName: 'PromoterScript',
                        href: '/pa.partner/cabinet/mobile_apps_promoter_script'
                    },
                    {
                        name: 'QR Коды',
                        href: '/pa.partner/cabinet/mobile_apps_qrs'
                    },
                    {
                        name: 'Иконки',
                        routeName: 'MobileAppsIcons',
                        href: '/pa.partner/cabinet/mobile_apps_icons'
                    },
                    {
                        name: 'Аналитика',
                        href: '/pa.partner/cabinet/mobile_apps_analytics'
                    },
                    {
                        name: 'Настройки',
                        routeName: 'MobileAppsSettings',
                        href: '/pa.partner/cabinet/mobile_apps_settings'
                    }
                ]
            },
            {
                name: 'Социальные приложения',
                routeName: 'SocialApps',
                href: '/pa.partner/cabinet/social_apps',
                children: []
            },
            {
                name: 'Общие настройки',
                href: '/pa.partner/cabinet/base_settings',
                children: [],
                routeName: 'BaseSettings'
            },
            {
                name: 'Push рассылки',
                href: '/pa.partner/cabinet/push_notifications',
                children: []
            }
        ]
    },
    {
        name: 'Информация',
        children: [
            {
                name: 'Заказы',
                href: '/pa.partner/cabinet/orders?date_creation_from=28%2F08%2F2023&page=1',
                children: []
            },
            {
                name: 'Транзакции',
                href: '/pa.partner/cabinet/transactions',
                children: []
            },
            {
                name: 'Отзывы',
                href: '/pa.partner/cabinet/feedback',
                children: []
            },
            {
                name: 'Статистика',
                routeName: 'statistic',
                href: '/pa.partner/cabinet/statistics?date_creation_from=28%2F08%2F2023',
                children: []
            },
            {
                name: 'Динамика',
                children: [
                    {
                        name: 'Заказы',
                        href: '/pa.partner/cabinet/order_dynamics?date_creation_from=31%2F07%2F2023&date_creation_to=28%2F08%2F2023'
                    },
                    {
                        name: 'Скачивание приложений',
                        href: '/pa.partner/cabinet/application_download_dynamics?date_from=31%2F07%2F2023&date_to=28%2F08%2F2023'
                    }
                ]
            },
            {
                name: 'Клиенты',
                children: [
                    {
                        name: 'Аккаунты',
                        href: '/pa.partner/cabinet/clients_accounts'
                    },
                    {
                        name: 'Управление бонусами',
                        href: '/pa.partner/cabinet/clients_bonuses'
                    },
                    {
                        name: 'Адреса',
                        href: '/pa.partner/cabinet/clients_addresses'
                    }
                ]
            },
            {
                name: 'Черный список',
                routeName: 'BlackList',
                href: '/pa.partner/cabinet/black_list',
                children: []
            }
        ]
    },
    {
        name: 'Управление бухгалтерией',
        children: [
            {
                name: 'Платежи',
                href: '/pa.partner/cabinet/payments',
                children: []
            },
            {
                name: 'Отчеты',
                href: '/pa.partner/cabinet/reports?date_from=28%2F08%2F2023&page=1',
                children: []
            },
            {
                name: 'Счета',
                routeName: 'Invoices',
                href: '/pa.partner/cabinet/invoices',
                children: []
            },
            {
                name: 'Акты',
                href: '/pa.partner/cabinet/acts',
                children: []
            },
            {
                name: 'Контрагенты',
                href: '/pa.partner/cabinet/contractors',
                children: []
            },
            {
                name: 'Курсы валют',
                href: '/pa.partner/cabinet/exchange_rates',
                children: []
            }
        ]
    },
    {
        name: 'Логи',
        children: [
            {
                name: 'Заказы',
                href: '/pa.partner/cabinet/log_orders',
                children: []
            },
            {
                name: 'Автоматизация',
                href: '/pa.partner/cabinet/log_automations',
                children: []
            },
            {
                name: 'СМС',
                routeName: 'SmsLogs',
                href: '/pa.partner/cabinet/log_sms',
                children: []
            },
            {
                name: 'Авторизации',
                href: '/pa.partner/cabinet/log_authorizations',
                children: []
            }
        ]
    },
    {
        name: 'Техподдержка',
        children: [
            {
                name: 'Заявки',
                href: '/pa.partner/cabinet/tickets',
                children: []
            },
            {
                name: 'Голосование',
                href: '/pa.partner/cabinet/poll',
                children: []
            }
        ]
    },
    {
        name: 'Настройки аккаунта',
        href: '/pa.partner/cabinet/account_settings',
        children: []
    },
    {
        name: 'Документация/WIKI',
        href: 'https://wiki.foodsoul.pro',
        children: []
    }
]

export default menu
