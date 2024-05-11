document.addEventListener("DOMContentLoaded", function () {
	const menuBtn = document.querySelector(".menu-btn");
	const header = document.querySelector(".header");
	const sideMenuContainer = document.querySelector(".side-menu-container");
	const sideMenu = document.querySelector(".side-menu");
	// const sideMenu = document.querySelector(".side-menu");
	const mainMenu = document.querySelector(".main-menu");
	const subMenu = document.querySelector(".sub-menu");
	const overlay = document.querySelector(".overlay");
	const closeBtn = document.querySelector(".close");
	const navContainer = document.querySelector(".nav-container");
	const navTop = document.querySelector(".nav-top");
	const navBottom = document.querySelector(".nav-bottom");
	const region = document.querySelector(".region");
	const regionMenu = document.querySelector(".region-menu");
	const signIn = document.querySelector(".sign-in");
	const signInMenu = document.querySelector(".sign-in-menu");
	const bannerNavLeftButton = document.getElementById("banner-nav-left");
	const bannerNavRightButton = document.getElementById("banner-nav-right");
	const bannerImages = document.querySelectorAll("#banner-slider > a");
	const leftSlide = document.querySelectorAll(".left-slide");
	const rightSlide = document.querySelectorAll(".right-slide");
	// const sliders = document.querySelectorAll(".slider");
	// const dealsSection = document.querySelector(".deals");

	let current = 0;
	let country = "Saudi Arabia";
	let mainListObj = {
		"Digital Content & Devices": {
			"Amazon Music": {
				"Stream Music": [
					"Amazon Music Unlimited",
					"Free Streaming Music",
					"Podcasts",
					"Open Web Player",
					"Download the app",
				],
			},
			"Kendle E-readers & Books": {
				"Kindle E-Readers": [
					"Kindle Kids",
					"Kindle",
					"Kindle Paperwhite Kids",
					"Kindle Paperwhite",
					"Kindle Oasis",
					"Kindle Scribe",
					"Accessories",
					"See all Kindle E-Readers",
				],
				"Kindle Store": [
					"Kindle Books",
					"Kindle Unlimited",
					"Prime Reading",
					"Kindle Vella",
				],
				"Apps & Resources": [
					"Free Kindle Reading Apps",
					" Kindle for Web",
					" Manage Your Content and Devices",
					" Trade-In",
				],
			},
			"Amazon App Store": {
				"Amazon Appstore": [
					"All Apps and Games",
					"Games",
					"Amazon Coins",
					"Download Amazon Appstore",
					"Amazon Apps",
					"Your Apps and Subscriptions",
				],
			},
		},
		"Shop By Department": {
			Electronics: {
				Electronics: [
					"Accessories & Supplies",
					"Camera & Photo",
					"Car & Vehicle Electronics",
					"Cell Phones & Accessories",
					"Computers & Accessories",
					"GPS & Navigation",
					"Headphones",
					"Home Audio",
					"Office Electronics",
					"Portable Audio & Video",
					"Security & Surveillance",
					"Service Plans",
					"Television & Video",
					"Video Game Consoles & Accessories",
					"Video Projectors",
					"Wearable Technology",
					"eBook Readers & Accessories",
				],
			},
			Computers: {
				Computers: [
					"Computer Accessories & Peripherals",
					"Computer Components",
					"Computers & Tablets",
					"Data Storage",
					"External Components",
					"Laptop Accessories",
					"Monitors",
					"Networking Products",
					"Power Strips & Surge Protectors",
					"Printers",
					"Scanners",
					"Servers",
					"Tablet Accessories",
					"Tablet Replacement Parts",
					"Warranties & Services",
				],
			},
			"Smart Home": {
				"Smart Home": [
					"Amazon Smart Home",
					"Smart Home Lighting",
					"Smart Locks and Entry",
					"Security Cameras and Systems",
					"Plugs and Outlets",
					"New Smart Devices",
					"Heating and Cooling",
					"Detectors and Sensors",
					"Home Entertainment",
					"Pet",
					"Voice Assistants and Hubs",
					"Kitchen",
					"Vacuums and Mops",
					"Lawn and Garden",
					"WIFI and Networking",
					"Other Solutions",
				],
			},
			"Arts & Crafts": {
				"Arts & Crafts": [
					"Painting, Drawing & Art Supplies",
					"Beading & Jewelry Making",
					"Crafting",
					"Fabric",
					"Fabric Decorating",
					"Knitting & Crochet",
					"Needlework",
					"Organization, Storage & Transport",
					"Printmaking",
					"Scrapbooking & Stamping",
					"Sewing",
					"Party Decorations & Supplies",
					"Gift Wrapping Supplies",
				],
			},
			Automotive: {
				Automotive: [
					"Car Care",
					"Car Electronics & Accessories",
					"Exterior Accessories",
					"Interior Accessories",
					"Lights & Lighting Accessories",
					"Motorcycle & Powersports",
					"Oils & Fluids",
					"Paint & Paint Supplies",
					"Performance Parts & Accessories",
					"Replacement Parts",
					"RV Parts & Accessories",
					"Tires & Wheels",
					"Tools & Equipment",
					"Automotive Enthusiast Merchandise",
					"Heavy Duty & Commercial Vehicle Equipment",
				],
			},
			Baby: {
				Baby: [
					,
					"Activity & Entertainment",
					"Apparel & Accessories",
					"Baby & Toddler Toys",
					"Baby Care",
					"Baby Stationery",
					"Car Seats & Accessories",
					"Diapering",
					"Feeding",
					"Gifts",
					"Nursery",
					"Potty Training",
					"Pregnancy & Maternity",
					"Safety",
					"Strollers & Accessories",
					"Travel Gear",
				],
			},
			// "Beauty and personal care": {},
			// "Women's Fashion": {},
			// "Men's Fashion": {},
			// "Girls' Fashion": {},
			// "Boys' Fashion": {},
			// "Health and Household": {},
			// "Home and Kitchen": {},
			// "Industrial and Scientific": {},
			// Luggage: {},
			// "Movies & Television": {},
			// "Pet supplies": {},
			// Software: {},
			// "Sports and Outdoors": {},
			// "Tools & Home Improvement": {},
			// "Toys and Games": {},
			// "Video Games": {},
		},
		"Programs & Features": {
			"Gift Cards": {
				"Give A Gift Card": [
					"All gift cards",
					"eGift cards",
					"Gift cards by mail",
					"Specialty gift cards",
					"Amazon Cash",
					"For Businesses",
				],
				"Manage Your Gift Card": [
					"Redeem a gift card",
					"View Your Balance",
					"Reload Your Balance",
				],
			},
			"Shop By Interest": {},
			"Amazon Live": { "Amazon Live": ["Live", "Recently Live"] },
			"International Shopping": {
				" International Shopping": ["Where we ship", "Visit Amazon Global"],
			},
			"Amazon Second Chance": {},
		},
		"Help & Settings": {
			"Your Account": {},
			English: {},
			"Saudi Arabia": {},
			Help: {},
			"Sign in": {},
		},
	};

	let closeMenu = function () {
		console.log("blured");
		overlay.style.zIndex = -1;
		overlay.style.opacity = 0;
		closeBtn.style.position = "absolute"
		sideMenuContainer.style.width = "0";
		sideMenuContainer.style.left = "calc( -50% - 50px)";
	};

	let navHeaderHover = function () {
		navContainer.style.position="fixed";
		navContainer.style.zIndex = 50;
		overlay.style.position="fixed";
		overlay.style.zIndex = 40;
		overlay.style.opacity = 0.5;
	};

	let adjustGrid = function () {
		const gridItems = document.querySelectorAll(
			"#section-departments > article"
		);
		const screenWidth = window.innerWidth - 120;
		const itemWidth = 300;

		// Make Sure That All Grid Items Are Visible
		gridItems.forEach((item, index) => {
			item.classList.remove("hidden");
			item.classList.add("flex");
		});

		// Then Check If There Are Exceeded Items To Hide It
		let colNum =
			screenWidth > 1400
				? 4
				: screenWidth < 1000
				? 3
				: Math.floor(screenWidth / itemWidth);
		let exceededItems = gridItems.length % colNum;

		// Loop To Hide Excedded Elements
		for (
			let i = gridItems.length - 1;
			i >= gridItems.length - exceededItems;
			i--
		) {
			gridItems[i].classList.remove("flex");
			gridItems[i].classList.add("hidden");
		}
	};

	window.addEventListener("resize", adjustGrid);

	adjustGrid();

	region.addEventListener("mouseenter", () => {
		navHeaderHover();
		regionMenu.style.zIndex = 60;
		regionMenu.style.display = "block";
	});
	region.addEventListener("mouseleave", () => {
		overlay.style.position="absolute";
		overlay.style.zIndex = -1;
		overlay.style.opacity = 0;
		regionMenu.style.display = "none";
		regionMenu.style.zIndex = -1;
	});
	signIn.addEventListener("mouseenter", () => {
		navHeaderHover();
		signInMenu.style.zIndex = 60;
		signInMenu.style.display = "block";
	});
	signIn.addEventListener("mouseleave", () => {
		overlay.style.position="absolute";
		overlay.style.zIndex = -1;
		overlay.style.opacity = 0;
		signInMenu.style.display = "none";
		signInMenu.style.zIndex = -1;
	});

	menuBtn.addEventListener("click", () => {
		mainMenu.style.left = 0;
		subMenu.style.left = "calc( 100% + 100px)";
		mainMenu.innerHTML = "";
		sideMenuContainer.style.left = "0";
		sideMenuContainer.style.width = "350px";
		sideMenuContainer.style.position="fixed";
		closeBtn.style.position="fixed";
		overlay.style.position="fixed";
		overlay.style.opacity = 0.5;
		overlay.style.zIndex = 60;
		sideMenu.style.overflowY = "scroll";
		sideMenu.style.overflowX = "hidden";
		sideMenu.style.height = "calc(100% - 52px)";

		// Rendering Side Menu List
		for (let item in mainListObj) {
			const menuListContanier = document.createElement("div");
			const menuSectionHeading = document.createElement("h4");
			const menuSectionList = document.createElement("ul");

			menuListContanier.className =
				"menu-section py-3 border-b border-solid border-lightText last:border-none";
			menuSectionHeading.className = "px-8 font-bold text-lg";
			menuSectionList.className = "flex mt-3 flex-col text-sm";

			// Adding MAin Menu Sections To Main Menu List
			menuSectionHeading.appendChild(document.createTextNode(item.toString()));
			menuListContanier.appendChild(menuSectionHeading);
			menuListContanier.appendChild(menuSectionList);

			mainMenu.appendChild(menuListContanier);

			// Loop On Main Menu Items To Genetate Sub Menu Items
			for (let i = 0; i < Object.values(mainListObj[item]).length; i++) {
				const mainTitle = document.createElement("div");
				const mainListItem = document.createElement("li");

				mainListItem.className = "relative py-3 px-8 group hover:bg-zinc-200";
				mainTitle.appendChild(
					document.createTextNode(Object.keys(mainListObj[item])[i])
				);
				mainListItem.appendChild(mainTitle);
				menuSectionList.appendChild(mainListItem);

				// Check If There's Sub Menu Or Not
				if (Object.values(Object.values(mainListObj[item])[i]).length > 0) {
					// Adding Arrow To Show Sub Menu
					const rightAngleIcon = document.createElement("div");

					rightAngleIcon.className =
						"right-angle-icon h-4 w-4 bg-amazonImage bg-no-repeat bg-right-angle-icon-position group-hover:bg-hover-right-angle-icon-position";
					mainTitle.appendChild(rightAngleIcon);

					// Add An EventListener To Main Item To Open it's Sub Menu
					mainListItem.addEventListener("click", () => {
						subMenu.innerHTML = "";

						// Adding Button To Back To Main Menu
						const backToMainBtn = document.createElement("div");
						const leftArrowIcon = document.createElement("div");

						leftArrowIcon.className =
							"left-arrow-icon h-4 w-4 bg-amazonImage bg-no-repeat bg-left-arrow-icon-position group-hover:bg-hover-left-arrow-icon-position";
						backToMainBtn.className =
							"back-to-main flex items-center gap-2 text-sm font-bold px-8 py-3 border-b border-solid border-lightText cursor-pointer group hover:bg-zinc-200";

						backToMainBtn.appendChild(leftArrowIcon);
						backToMainBtn.appendChild(document.createTextNode("MAIN MENU"));
						subMenu.appendChild(backToMainBtn);

						// Adding An EventListener To Go Back To Main Menu
						backToMainBtn.addEventListener("click", () => {
							mainMenu.style.left = "0";
							subMenu.style.left = "calc( 100% + 100px)";
						});

						// Loop On Sub Menu Of Selected Main Item To Render It's All Sections
						for (
							let j = 0;
							j < Object.values(Object.values(mainListObj[item])[i]).length;
							j++
						) {
							// Appending All Sections Of Sub Menu
							const subMenuListContanier = document.createElement("div");
							const subMenuSectionHeading = document.createElement("h4");
							const subMenuSectionList = document.createElement("ul");

							// Adding classNames
							subMenuListContanier.className =
								"sub-menu-section py-3 border-b border-solid border-lightText";
							subMenuSectionHeading.className = "px-8 font-bold text-lg";
							subMenuSectionList.className = "flex mt-3 flex-col text-sm";

							subMenuSectionHeading.appendChild(
								document.createTextNode(
									Object.keys(Object.values(mainListObj[item])[i])[j]
								)
							);
							subMenuListContanier.appendChild(subMenuSectionHeading);

							// Loop To Get All Items Of Each Section In Sub Menu
							for (
								let k = 0;
								k <
								Object.values(
									Object.values(Object.values(mainListObj[item])[i])[j]
								).length;
								k++
							) {
								let subListItem = document.createElement("li");
								let subTitle = document.createElement("div");
								subTitle.appendChild(
									document.createTextNode(
										Object.values(
											Object.values(Object.values(mainListObj[item])[i])[j]
										)[k].toString()
									)
								);
								subListItem.className = "relative py-3 px-8 hover:bg-zinc-200";
								subMenuListContanier.className =
									"sub-menu-section py-3 border-b border-solid border-lightText last:border-none ";
								subMenuSectionList.className = "flex mt-3 flex-col text-sm";

								subListItem.appendChild(subTitle);
								subMenuSectionList.appendChild(subListItem);
								subMenuListContanier.appendChild(subMenuSectionList);
								subMenu.appendChild(subMenuListContanier);
								subMenu.style.height = "fit-content";
							}
						}

						mainMenu.style.left = "calc( -100% - 100px)";
						subMenu.style.left = 0;
					});
				}
			}
		}
	});

	closeBtn.addEventListener("click", closeMenu);
	overlay.addEventListener("click", closeMenu);

	bannerNavLeftButton.addEventListener("click", () => {
		if (!bannerImages[0].classList.contains("current")) {
			for (let i = 0; i < bannerImages.length; i++) {
				if (bannerImages[i].classList.contains("current")) {
					bannerImages[i].classList.remove("current");
					bannerImages[i].classList.add("next");

					bannerImages[i - 1].classList.remove("previous");
					bannerImages[i - 1].classList.add("current");

					break;
				}
			}
			console.log("Current");
		}
		console.log();
	});

	bannerNavRightButton.addEventListener("click", () => {
		if (!bannerImages[bannerImages.length - 1].classList.contains("current")) {
			for (let i = 0; i < bannerImages.length; i++) {
				if (bannerImages[i].classList.contains("current")) {
					bannerImages[i].classList.remove("current");
					bannerImages[i].classList.add("previous");

					bannerImages[i + 1].classList.remove("next");
					bannerImages[i + 1].classList.add("current");

					break;
				}
			}
			console.log("Current");
		}
		console.log();
	});
	leftSlide.forEach((item) => {
		item.addEventListener("click", (event) => {
			const slider = event.target.closest(".slider");
			slider.scrollBy(-window.innerWidth, 0);

			if (slider.scrollLeft == 0) {
				slider.children[2].classList.add("animate-slide-start");
				setTimeout(() => {
					slider.children[2].classList.remove("animate-slide-start");
				}, 1000);
				console.log("start of scroll");
			}
		});
	});
	rightSlide.forEach((item) => {
		item.addEventListener("click", (event) => {
			const slider = event.target.closest(".slider");
			slider.scrollBy(window.innerWidth, 0);

			if (slider.scrollLeft > slider.scrollWidth - window.innerWidth) {
				slider.classList.add("animate-slide-end");
				setTimeout(() => {
					slider.classList.remove("animate-slide-end");
				}, 1000);
				console.log("end of scroll");
			}
		});
	});
});
