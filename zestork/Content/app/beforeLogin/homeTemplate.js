ZestorkApp.controller('homeTemplate', function ($scope) {

    NProgress.start();
    
    $scope.dataLoaded = {
        status: true
    }

    $scope.showImageSlider = false;

    $scope.sliderImageList = [
          { ImageAlt: "slider1", ImageUrl: "../../Resource/templates/beforeLogin/web/images/slider1.jpg" },
          { ImageAlt: "slider2", ImageUrl: "../../Resource/templates/beforeLogin/web/images/slider2.jpg" },
          { ImageAlt: "slider3", ImageUrl: "../../Resource/templates/beforeLogin/web/images/slider3.jpg" },
          { ImageAlt: "slider4", ImageUrl: "../../Resource/templates/beforeLogin/web/images/slider4.jpg" },
        ];

    $scope.gridIconDataList = [          
          { ImageLink: "../../Resource/templates/beforeLogin/web/services.html",
              ImageIconUrl: "../../Resource/templates/beforeLogin/web/images/g2.png",
              Headline: "I need it done",
              Content: "Want to hire? Post a job!",
              BottomButtonUrl: "../../Resource/templates/beforeLogin/web/about.html",
              BottomButtonText: "Read More"
          },
          { ImageLink: "#/signup/user",
              ImageIconUrl: "../../Resource/templates/beforeLogin/web/images/g1.png",
              Headline: "I will do it",
              Content: "Want to work? Sign up!",
              BottomButtonUrl: "#/signup/user",
              BottomButtonText: "Read More"
          }
//          ,
//          { ImageLink: "../../Resource/templates/beforeLogin/web/services.html",
//              ImageIconUrl: "../../Resource/templates/beforeLogin/web/images/g3.png",
//              Headline: "Customer Support",
//              Content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//              BottomButtonUrl: "../../Resource/templates/beforeLogin/web/services.html",
//              BottomButtonText: "Read More"
//          }
        ];

    $scope.bottomContent = {

        leftColumnHeading: "Our Vision",
        leftColumnContent: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." +
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        leftColumnLink: "moreinfo.html",

        middleColumnHeading: "What we do",
        middleColumnContentList: [
              { Content: "Contact", Url:"#/contact" },
              { Content: "Copy typing" , Url:"#"},
              { Content: "Slogan wrting" , Url:"#"},
              { Content: "Commenting on websites" ,Url:"#" },
              { Content: "Finding good pics for a website" , Url:"#" },
              { Content: "Voting" , Url:"#"},
              { Content: "Translation", Url:"#" },
              { Content: "Drawing", Url: "#" }
        ],
        rightColumnHeading: "Our Stafff",
        rightColumnImageList: [
              { imgUrl: "../../Resource/templates/beforeLogin/web/images/management-1.jpg" },
              { imgUrl: "../../Resource/templates/beforeLogin/web/images/management-2.jpg" },
              { imgUrl: "../../Resource/templates/beforeLogin/web/images/management-3.jpg" },
              { imgUrl: "../../Resource/templates/beforeLogin/web/images/management-4.jpg" },
              { imgUrl: "../../Resource/templates/beforeLogin/web/images/management-5.jpg" },
              { imgUrl: "../../Resource/templates/beforeLogin/web/images/management-6.jpg" },
        ],
        rightColumnLink: "viewall.html"

        //copyRightInfo: "<p>Company Name © All Rights Reseverd | Design by  <a href=\"http://zestork.com\">W3Layouts</a></p>"        
    };

    NProgress.done();
});