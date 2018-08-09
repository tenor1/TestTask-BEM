// TestTask
module.exports = {
	block: 'page',
	title: 'Интернет-магазин маркетингового контента TestTask',
	favicon: '/favicon.ico',
	head: [
		{elem: 'meta', attrs: {name: 'description',
		content: 'Разработка контентной стратегии для продвижения сайта, выбор, создание и размещение маркетингового контента'}},
		{elem: 'meta', attrs: {name: 'description',
		content: 'Разработка контентной стратегии для продвижения сайта, выбор, создание и размещение маркетингового контента'}},
		{elem: 'css', url: 'index.css' }
	],
	content: [
		{
			elem: 'header',
			content: [
			{
				block: 'logo',
				content: 'Logo'
			},
			{
				tag:'nav',
				content:
				{
					block: 'menu',
					tag: 'ul',
					mods: {place: 'top'},
					content: [
					{
						tag: 'li',
						elem: 'item',
						content: 
						{
							tag: 'a',
							attrs: {href: '#'},
							content: 'О компании'
						}
					},
					{
						tag: 'li',
						elem: 'item',
						content: 
						{
							tag: 'a',
							attrs: {href: '#'},
							content: 'Услуги'
						}
					},
					{
						tag: 'li',
						elem: 'item',
						content: 
						{
							tag: 'a',
							attrs: {href: '#'},
							content: 'Отзывы'
						}
					},
					{
						tag: 'li',
						elem: 'item',
						content: 
						{
							tag: 'a',
							attrs: {href: '#'},
							content: 'Контакты'
						}
					}
					]
				}
			}
			]
		},
		{
			block: 'advert',
			tag: 'section',
			content: [
			{
				elem: 'image',
				content: 'Advert Image'
			},
			{
				elem: 'propos',
				cont: [
				{
					elem: 'h2',
					cont: 'Типы контента, которые вы можете публиковать в своем интернет-магазине.'
				}
				]
			}
			]
		},
		{
			elem: 'articles',
			tag: 'section',
			content: [
				{
					block: 'article',
					content: [
						{
							tag: 'h2',
							content: 'Эффективность контентной стратегии'
						},
						{
							tag: 'p',
							content: 'Грамотная контентная стратегия для интернет-магазина позволяет значительно увеличить объемы поискового трафика на сайт, за который предпринимателю нет необходимости платить. Это повышает рентабельность бизнеса, ускоряет его развитие и дает преимущество по сравнению с конкурентами.Поэтому выстраивать эффективную стратегию контент-маркетинга в современных реалиях просто необходимо.'
						},
						{
							block: 'icons-greed',
							content: 
							[
								{
									elem: 'icon',
									tag: 'figure',
									content: [
										{
											tag: 'img',
											attrs: {src: '../../desktop.blocks/icons-greed/heads-ico.png'}
										},
										{
											elem: 'caption',
											tag: 'figcaption',
											content: 'Улучшение посещаемости'
										}
									]
								},
								{
									elem: 'icon',
									tag: 'figure',
									content: [
										{
											tag: 'img',
											attrs: {src: '../../desktop.blocks/icons-greed/busketup-ico.png'}
										},
										{
											elem: 'caption',
											tag: 'figcaption',
											content: 'Увеличение количества продаж'
										}
									]
								},
								{
									elem: 'icon',
									tag: 'figure',
									content: [
										{
											tag: 'img',
											attrs: {src: '../../desktop.blocks/icons-greed/calc-ico.png'}
										},
										{
											elem: 'caption',
											tag: 'figcaption',
											content: 'Рост прибыли'
										}
									]
								},
								{	
									elem: 'icon',
									tag: 'figure',
									content: [
										{
											tag: 'img',
											attrs: {src: '../../desktop.blocks/icons-greed/portf-ico.png'}
										},
										{
											elem: 'caption',
											tag: 'figcaption',
											content: 'Стабильность бизнеса'
										}
									]
								}
							]
						}
					]
				},
				{
					block: 'article',
					content: [
						{
							tag: 'h2',
							content: 'Информация о товаре'
						},
						{
							tag: 'p',
							content: 'Это текст, который доступен посетителю на странице товара. Это может быть как качественно подготовленное описание, так и дополнительная информация: интересные факты, видеообзор, а также преимущества данного товара по сравнению с аналогами от конкурентов. Согласитесь, это будет гораздо интереснее, чем банальное описание технических характеристик.'
						}
					]
				},
				{
					block: 'article',
					content: [
						{
							tag: 'h2',
							content: 'Маркетинговый контент'
						},
						{
							tag: 'p',
							content: 'Речь идет о заметках и публикациях с информацией о скидках, распродажах, конкурсах и прочих акционных предложениях. Такой текст тоже необходимо тщательно прорабатывать, так как от стиля подачи во многом зависит и успех подобной акции. В современных реалиях вызвать интерес со стороны потенциального клиента не так уж и просто.'
						}
					]
				},
				{
					block: 'article',
					content: [
						{
							tag: 'h2',
							content: 'Обзорные статьи'
						},
						{
							tag: 'p',
							content: 'Они могут быть самыми разными – от разъяснения особенностей той или иной технологии и до демонстрации вариантов применения гаджета или другого подобного устройства. Важно раскрывать тему и давать пользователю исчерпывающий ответ на интересующий его вопрос. И да, не забывайте отвечать на комментарии – коммуникация должна быть двухсторонней.'
						}
					]
				}
			]
		}
	]
};