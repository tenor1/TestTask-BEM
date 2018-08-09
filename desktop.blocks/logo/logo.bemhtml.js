block('logo').content()(function(){
    return {
               // block: 'image',
								tag: 'img',
								attrs: {src: '../../desktop.blocks/logo/logo.png'},
                url: this.ctx.image || 'logo.png',
                alt: this.ctx.alt || ' альтернативный текст '
        }
		tag()
})