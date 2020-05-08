function splitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.you-about',
        triggerHook: 0
    })
        .setPin('.you-about')
        .addIndicators()
        .addTo(controller);
}

alert("La page ect atuellement en Beta v0.3.8");
splitScroll();

//cela n'est pas encore totalement fonctionel pour le moment prévue pour la version Beta V0.5.0

