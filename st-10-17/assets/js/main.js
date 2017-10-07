/*
	Forty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = (skel.vars.browser == 'ie' || skel.vars.browser == 'edge' || skel.vars.mobile) ? function() { return $(this) } : function(intensity) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._parallax(intensity);

			return $this;

		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function() {

			var $t = $(this),
				on, off;

			on = function() {

				$t.css('background-position', 'center 100%, center 100%, center 0px');

				$window
					.on('scroll._parallax', function() {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');

					});

			};

			off = function() {

				$t
					.css('background-position', '');

				$window
					.off('scroll._parallax');

			};

			skel.on('change', function() {

				if (skel.breakpoint('medium').active)
					(off)();
				else
					(on)();

			});

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
			});

		return $(this);

	};


	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper'),
			$header = $('#header'),
			$banner = $('#banner'),
			$main = $('#main');


			// var projectDetails = function (response) {
		  //   return response.json();
			// };
			//
			// fetch('https://shawntuttle.com/assets/data/projects.json', {
			//   credentials: 'same-origin'
			// })
			// .then(parseJson(response))
			// .catch(function(err) {
					// console.log(err)
			// });

		var projectDetails = [
	    {
	      "id": "hm-data",
	      "title": "Hungry Monster",
	      "tech": ["Javascript", " KonvaJS", " Webpack" ],
				"summary": "A Javascript touch & drag-based math game.",
				"details": "Mobile-first app built for my 7 y.o. niece featuring a hungry monster and Boom ShaKaLaKa. Modular JS design pattern.",
	      "github": "https://github.com/ShawnTe/hungry-monster-basic/",
	      "url": "http://hungrymonster.fun/",
	      "role": "Sole developer"
	    },
	    {
	      "id": "me-data",
	      "title": "Artist Site",
	      "tech": ["Ruby on Rails", " Cucumber", " Bootstrap", " Paperclip", " Devise", " AWS" ],
	      "summary": "Mobile-responsive Ruby on Rails artist gallery.",
	      "details": "Site developed via Behavior Driven Development. I integrated gems and AWS S3 + CloudFront, custom actions; wrote responsive CSS,  BDD user stories + tests, and designed backend to reflect client’s desire for minimalist interface.",
	      "github": "https://github.com/ericbooker12/fuzzy_hat_artist_site",
	      "url": "http://www.markeinert.com/",
	      "role": "Co-developer"
	    },
	    {
	      "id": "isleep-data",
	      "title": "iSleep",
	      "tech": ["React Native", " Expo", " React Navigation"],
	      "summary": "Yoga Nidra (sleep yoga) app built with React Native.",
	      "details": "Audio player, accordion menus, simple interface are some of the features.",
	      "github": "https://github.com/FuzzyHatPublishing/isleep",
	      "url": null,
	      "role": "Co-developer"
	    },
	    {
	      "id": "phoney-data",
	      "title": "Phoney.club",
	      "tech": ["NodeJS", " Twilio", " IBM Watson"],
	      "summary": "Mobile-first app built at the Tech Crunch Disrupt SF 2016 Hackathon.",
	      "details": "Voice or touch-activated interface to initiate phone call via Twilio.",
	      "github": "https://github.com/ShawnTe/server-i-have-to-take-this",
	      "url": null,
	      "role": "Conceptualize UX, designate user flow, create written content and frontend Javascript on team of 4"
	    },
	    {
	      "id": "gyft-data",
	      "title": "Game Gyft",
	      "tech": ["HTML", " CSS", " Javascript", " VISA & Marqueta APIs"],
	      "summary": "Web app built at the Money 20/20 2016 Hackathon.",
	      "details": "Take the guilt out of gyfting a gift card by delivering via interactive game.",
	      "github": "https://github.com/ShawnTe/gamegyft-v2",
	      "url": null,
	      "role": "Product Manager, presentation concept and delivery, frontend Javascript on team of 4"
	    },
	    {
	      "id": "guardian-data",
	      "title": "Guardian",
	      "tech": ["Ruby on Rails", " NodeJS", " Twilio API", " Google GeoLocation API", " Parrot AR.Drone 2.0"],
	      "summary": "Mobile-first app built with two servers.",
	      "details": "Designed to help you get home safely, UI built with RoR which issued commands to NodeJS server to control drone.",
	      "github": "https://github.com/ShawnTe/guardian",
	      "url": null,
	      "role": "Rails backend, most of the Javascript/Ajax functionality & majority of the CRUD views on team of 4"
	    }
	]

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load pageshow', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Clear transitioning state on unload/hide.
			$window.on('unload pagehide', function() {
				window.setTimeout(function() {
					$('.is-transitioning').removeClass('is-transitioning');
				}, 250);
			});

		// Fix: Enable IE-only tweaks.
			if (skel.vars.browser == 'ie' || skel.vars.browser == 'edge')
				$body.addClass('is-ie');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly({
				offset: function() {
					return $header.height() - 2;
				}
			});

		// Tiles.
			var $tiles = $('.tiles > article');

			$tiles.each(function() {

				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img'),
					$link = $this.find('.link'), $id = $this.find('#id').children().context.id,
					x;

		// Image.
			// Set image.
				// $this.css('background-image', 'url("images/blue-monster.jpg")');
				$this.css('background-image', 'url(' + $img.attr('src') + ')');

			// Set position.
				if (x = $img.data('position'))
					$image.css('background-position', x);

			// Hide original.
				$image.hide();

			// Link.
				if ($link.length > 0) {

					$x = $link.clone()
						.text('')
						.addClass('primary')
						.appendTo($this);

					$link = $link.add($x);
				}
			});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() {
					$window.trigger('scroll');
				});

				$window.on('load', function() {

					$banner.scrollex({
						bottom:		$header.height() + 10,
						terminate:	function() { $header.removeClass('alt'); },
						enter:		function() { $header.addClass('alt'); },
						leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
					});

					window.setTimeout(function() {
						$window.triggerHandler('scroll');
					}, 100);
				});
			}

		// Banner.
			$banner.each(function() {

				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img');

				// Parallax.
					$this._parallax(0.275);

				// Image.
					if ($image.length > 0) {

						// Set image.
							$this.css('background-image', 'url(' + $img.attr('src') + ')');

						// Hide original.
							$image.hide();
					}
			});

		// Menu.
			var $menu = $('#menu'),
				$menuInner;

			$menu.wrapInner('<div class="inner"></div>');
			$menuInner = $menu.children('.inner');
			$menu._locked = false;

			$menu._lock = function() {

				if ($menu._locked)
					return false;

				$menu._locked = true;

				window.setTimeout(function() {
					$menu._locked = false;
				}, 350);

				return true;

			};

			$menu._show = function() {

				if ($menu._lock())
					$body.addClass('is-menu-visible');

			};

			$menu._hide = function() {

				if ($menu._lock())
					$body.removeClass('is-menu-visible');

			};

			$menu._toggle = function() {

				if ($menu._lock())
					$body.toggleClass('is-menu-visible');

			};

			$menuInner
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 250);

				});

			$menu
				.appendTo($body)
				.on('click', function(event) {

					event.stopPropagation();
					event.preventDefault();

					$body.removeClass('is-menu-visible');

				})
				.append('<a class="close" href="#menu">Close</a>');

			// Toggle details
			$body
				.on('click', 'a[href="#details"]', function(event) {
					event.stopPropagation();
					event.preventDefault();

					$('#details').empty();

					var $details = $('#details'),
				    $detailsInner;

				  $details.wrapInner('<div class="inner"></div>');
				  $detailsInner = $details.children('.inner');
				  $details._locked = false;
					// Toggle.

					var id = event.target.parentElement.id
					buildProjectDetails($details, $detailsInner, id);
						$details._toggle();
				})
				.on('click', function(event) {

					// Hide.
						$details._hide();
				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$details._hide();
				});

			function buildProjectDetails(details, detailsInner, id) {
				$details = details
				$detailsInner = detailsInner

			  var currentProject = {}

				function getCurrentProject(projectDetails, id) {
					function matchID(project) {
						return project.id === id;
					}
					return projectDetails.find(matchID)
				}

				function createProjectHTML(currentProject) {

						var title = `<h3>${currentProject.title}</h3>`
						var tech = `<h4>Tech</h4><p>${currentProject.tech}</p>`
						var summary  = `<h4>Summary</h4><p>${currentProject.summary}</p>`
						var details = `<h4>Details</h4><p>${currentProject.details}</p>`
						var role = `<h4>Role</h4><p>${currentProject.role}</p>`
						var links = function(){
							var links = `<h4>Links</h4><p id="decr-height"><a href="${currentProject.github}">Github</a>`
							var close = `</p>`
							if(currentProject.url != null) {
								links += `&nbsp;&nbsp;<a href="${currentProject.url}">Online</a>`
							}
							return links + close
						}();
					return [title, tech, summary, details, role, links].filter(val => val).join('')
				}




				function getObjects(projectDetails, id) {
					var currentProject = getCurrentProject(projectDetails, id);
					var projectHTML = createProjectHTML(currentProject);
					return projectHTML
				}

			  projectForOverlay = getObjects(projectDetails, id)

			  $detailsInner.append(projectForOverlay);

			  $details._lock = function() {

			    if ($details._locked)
			      return false;

			    $details._locked = true;

			    window.setTimeout(function() {
			      $details._locked = false;
			    }, 350);

			    return true;
			  };

			  $details._show = function() {

			    if ($details._lock())
			      $body.addClass('are-details-visible');
			  };

			  $details._hide = function() {

			    if ($details._lock())
			      $body.removeClass('are-details-visible');
			  };

			  $details._toggle = function() {

			    if ($details._lock())
			      $body.toggleClass('are-details-visible');
			  };

				$details
					.appendTo($body)
					.on('click', function(event) {

						event.stopPropagation();
						event.preventDefault();

						$body.removeClass('are-details-visible');

					})
					.append('<a class="close" href="#details">Close</a>');
			}
			// Toggle menu
			$body
				.on('click', 'a[href="#menu"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					thisIsANewFunction(id)
					// Toggle.
						$menu._toggle();
				})
				.on('click', function(event) {

					// Hide.
						$menu._hide();
				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$menu._hide();
				});
	});

})(jQuery);
