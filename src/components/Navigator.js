import React from "react";
import $ from "jquery";
import '../res/styles.css'
import '../res/reset.css'
class Navigator extends React.Component {
  constructor(props) {
    super(props);
    this.routeMap = {
      main: {
		Home : "/",
        Events: "/events",
        Workshops: "/workshops",
        Hackathon: "/events/ece/ai-4-good-hackathon",
		Registration: "/register",
		Organizers: "/organizers",
        "AboutUs": "/about-us",
        Hospitality: "/hospitality",
      }
    };
    this.state = {
      title: props.title,
      expand: false
    };
  }

  componentDidMount = () => {
    $(document).ready(function() {
      if ($(".cd-stretchy-nav").length > 0) {
		var stretchyNavs = $(".cd-stretchy-nav")

        stretchyNavs.each(function() {
          var stretchyNav = $(this),
            stretchyNavTrigger = stretchyNav.find(".cd-nav-trigger");

          stretchyNavTrigger.on("click", function(event) {
            event.preventDefault();
			stretchyNav.toggleClass("nav-is-visible");
          });
        });

        $(document).on("click", function(event) {
          !$(event.target).is(".cd-nav-trigger") &&
            !$(event.target).is(".cd-nav-trigger span") &&
			stretchyNavs.removeClass("nav-is-visible")
        });
      }
    });
  };
  render() {
    return (
		<div className="overlay">
		  <header className="">
	<nav class="cd-stretchy-nav  ">
		<a class="cd-nav-trigger " href="#">
			<span aria-hidden="true"></span>
		</a>
		<ul>
			{Object.keys(this.routeMap.main).map(key => (
				<li><a href={this.routeMap.main[key]}><span>{key}</span>
					</a></li>
            ))}
			{/* <li><a href="#0"><span>Portfolio</span></a></li>
			<li><a href="#0"><span>Services</span></a></li>
			<li><a href="#0"><span>Store</span></a></li>
			<li><a href="#0"><span>Contact</span></a></li> */}
		</ul>

		<span aria-hidden="true" class="stretchy-nav-bg"></span>
	</nav>
</header>
</div>
   
    );
  }
}

export default Navigator;
