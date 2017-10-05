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
		    "tech": ["Javascript", "KonvaJS", "Webpack" ],
		    "summary": "A Javascript math game built for mobile.",
		    "details": "More info here.",
		    "role": "Sole developer"
		  },
			{
		    "id": "isleep-data",
		    "title": "iSleep",
		    "tech": ["React Native" ],
		    "summary": "An app for iOS and Android.",
		    "details": "More info here.",
		    "role": "Co-developer"
		  }
		]

		// console.log(projectDetails)

		// var projectDetails = originalProjectDetails.slice(0);
		// console.log(projectDetails)




		// function getObjectDetails(projectDetails) {
			// for(var obj in projectDetails) {
			// for (var i = 0; i < projectDetails.length; i++){
				// console.log(obj)
				// console.log(obj + " " + projectDetails[obj])

			// }
		// }
		// getObjectDetails(projectDetails)     // Objects
		// getObjects(projectDetails)							// Array



		// console.log(details);
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
					// console.log($id)  // got the id!

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



		// Details.
		// getDetails();


		// Menu.
			var $menu = $('#menu'),
				$menuInner;

			// console.log('$menu around line 279-ish', $menu);

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

			// This is click on details overlay


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
				    $detailsInner;    // how is it grabbing this?

				  // console.log('$details', $details);

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

				// function getCurrentProject (if id's match)
				// function createProjectHTML with return of getCurrentProject()
				// append return of createProjectHTML to $detailsInner



				function getCurrentProject(projectDetails, id) {
					function matchID(project) {
						return project.id === id;
					}
					return projectDetails.find(matchID)
				}

				function createProjectHTML(currentProject) {

					var projectHtml = `
						<p>Title: ${currentProject.title}</p>
						<p>Tech: ${currentProject.tech}</p>
						<p>Summary: ${currentProject.summary}</p>
						<p>Details: ${currentProject.details}</p>
						<p>Role: ${currentProject.role}</p>
					`
					return projectHtml
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
