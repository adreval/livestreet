/**
 * Блоки
 * 
 * @module ls/blocks
 * 
 * @license   GNU General Public License, version 2
 * @copyright 2013 OOO "ЛС-СОФТ" {@link http://livestreetcms.com}
 * @author    Denis Shakhov <denis.shakhov@gmail.com>
 */

var ls = ls || {};

ls.blocks = (function ($) {
	"use strict";
	
	/**
	 * Инициализация
	 *
	 * @param {Object} options Опции
	 */
	this.init = function(options) {
		// Заменяет навигацию на выпадающий список если пунктов больше
		// определенного значения
		// TODO: Вынести в отдельный функционал
		var tabs = $('#js-stream-tabs'),
			dropdown = $('#js-stream-dropdown');

		if ($('#js-stream-tabs li').length >= 3) {
			tabs.hide();
			dropdown.show();
		}

		// Кнопка обновления блока
		$('#js-stream-update').on('click', function () {
			((tabs.is(':visible')) ? tabs : $('#js-dropdown-menu-stream')).find('li.active').tab('activate');
			$(this).addClass('active');
			setTimeout( function() { $(this).removeClass('active'); }.bind(this), 600 );
		});

		// Сохраняем высоту блока при переключении табов
		$('.js-block-nav li')
			.on('tabbeforeactivate', function (e, data) {
				data.pane.css('height', data.pane.height());
			})
			.on('tabactivate', function (e, data) {
				data.pane.css('height', 'auto');
			});
	};

	return this;
}).call(ls.blocks || {},jQuery);