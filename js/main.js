/* ==================================================
   LIAO YU-YING
   MAIN JAVASCRIPT
================================================== */


document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* =========================================
           PAGE LOAD
        ========================================== */

        document.body.classList.add(
            "page-loaded"
        );



        /* =========================================
           MOBILE MENU
        ========================================== */

        const menuButton =
            document.getElementById(
                "menuButton"
            );


        const navigation =
            document.getElementById(
                "mainNavigation"
            );


        if (
            menuButton &&
            navigation
        ) {


            menuButton.addEventListener(
                "click",
                () => {


                    const isOpen =
                        navigation.classList.toggle(
                            "is-open"
                        );


                    menuButton.setAttribute(
                        "aria-expanded",
                        isOpen
                    );


                }
            );


        }



        /* =========================================
           CLOSE MOBILE MENU
           AFTER CLICKING LINK
        ========================================== */

        const navigationLinks =
            document.querySelectorAll(
                ".main-navigation a"
            );


        navigationLinks.forEach(
            (link) => {


                link.addEventListener(
                    "click",
                    () => {


                        if (
                            navigation
                        ) {

                            navigation.classList.remove(
                                "is-open"
                            );

                        }


                        if (
                            menuButton
                        ) {

                            menuButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }


                    }
                );


            }
        );



        /* =========================================
           PAGE TRANSITION
        ========================================== */

        const currentHost =
            window.location.host;


        const links =
            document.querySelectorAll(
                "a"
            );


        links.forEach(
            (link) => {


                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !href ||
                    href.startsWith("#") ||
                    href.startsWith("mailto:") ||
                    href.startsWith("tel:")
                ) {

                    return;

                }


                if (
                    link.target === "_blank"
                ) {

                    return;

                }


                link.addEventListener(
                    "click",
                    (event) => {


                        let targetURL;


                        try {

                            targetURL =
                                new URL(
                                    href,
                                    window.location.href
                                );

                        } catch {

                            return;

                        }


                        if (
                            targetURL.host !==
                            currentHost
                        ) {

                            return;

                        }


                        event.preventDefault();


                        document.body.classList.add(
                            "page-exit"
                        );


                        setTimeout(
                            () => {

                                window.location.href =
                                    targetURL.href;

                            },
                            350
                        );


                    }
                );


            }
        );


    }
);