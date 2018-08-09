/*block ('advert') (
	
); */
block('advert').content()(function() {
		applyNext();
    return [
			{
				elem: 'image',
				content: {
					tag: 'img',
					attrs: {src: '../../desktop.blocks/advert/Smartphone-1.png'}
				}
			},
			{
				elem: 'propos',
				content: [
					{
						tag: 'h2',
						content: 'Типы контента, которые вы можете публиковать в своем интернет-магазине.'
					},
					{
						tag: 'p',
						content: 'Грамотная контентная стратегия для интернет-магазина позволяет значительно увеличить объемы поискового трафика на сайт, за который предпринимателю нет необходимости платить. Это повышает рентабельность бизнеса, ускоряет его развитие и дает преимущество...'
					},
					{
						elem: 'but',
						tag: 'a',
						content: 'Подробнее'
					}
				]
			}	
		];
});