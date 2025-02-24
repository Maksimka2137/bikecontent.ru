<template>
    <div id="page" class="s-pagewrap">
        <NuxtPage />


        <header class="s-header">
            <div class="row s-header__inner">

                <div class="s-header__block">
                    <div class="s-header__logo">
                        <a class="logo" href="index.html">
                            <img src="/images/logo.svg" alt="Homepage">
                        </a>
                    </div>

                    <a class="s-header__menu-toggle" href="#0"><span>Навигация</span></a>
                </div> <!-- end s-header__block -->

                <nav class="s-header__nav">
                    <ul class="s-header__menu-links">
                        <li class="current"><a href="#intro" class="smoothscroll">Начало</a></li>
                        <li><a href="#about" class="smoothscroll">О нас</a></li>
                        <li><a href="#services" class="smoothscroll">Услуги</a></li>
                        <li><a href="#folio" class="smoothscroll">Портфолио</a></li>
                        <li><a href="#footer" class="smoothscroll">Контакты</a></li>
                        <li><NuxtLink href="/en">[ English ]</NuxtLink></li>
                    </ul> <!-- s-header__menu-links -->
                </nav> <!-- end s-header__nav -->

            </div> <!-- end s-header__inner -->

        </header> <!-- end s-header -->


        <!-- # site-content
        ================================================== -->
        <section id="content" class="s-content">


            <!-- intro
            ----------------------------------------------- -->
            <section id="intro" class="s-intro target-section">

                <div class="s-intro__bg"></div>

                <div class="row s-intro__content">

                    <div class="s-intro__content-bg"></div>

                    <div class="column lg-12 s-intro__content-inner">
                        
                        <h1 class="s-intro__content-title">
                            Bikecontent — производство видео про горные велосипеды
                        </h1>

                        <div class="s-intro__content-buttons">
                        </div>
                        
                    </div> <!-- s-intro__content-inner -->

                </div> <!-- s-intro__content -->

                <div class="s-intro__scroll-down">
                    <a href="#about" class="smoothscroll">
                        <span>Вниз</span>
                    </a>
                </div> <!-- s-intro__scroll-down -->

            </section> <!-- end s-intro -->


            <!-- about
            ----------------------------------------------- -->
            <section id="about" class="s-about target-section">

                <div class="row section-header" data-num="01">
                    <h3 class="column lg-12 section-header__pretitle pretitle text-pretitle">Что мы умеем</h3>
                    <div class="column lg-6 stack-on-1100 section-header__primary">
                        <h2 class="title text-display-1">
                            Привет! 
                        </h2>
                        <p class="desc">
                            Если ты любишь кататься на своем горном велосипеде и хочешь показать это другим людям, то мы тебе в этом поможем!
                        </p>
                    </div>
                    <div class="column lg-6 stack-on-1100 section-header__secondary">
                    </div>
                </div> <!-- end section-header -->

                <div class="row process-list list-block show-ctr block-lg-one-half block-tab-whole">
    
                    <div class="column list-block__item">
                        <div class="list-block__title">
                            <h3 class="h5">Снимем видео</h3>
                        </div>
                        <div class="list-block__text">
                            <p>
                                Поможем тебе снять видео про твой велосипед. 
                                Хочешь — гоняй сам, хочешь — пилотом будет кто-нибудь из нас 
                            </p>
                        </div>
                    </div> <!-- end list-block__item -->

                    <div class="column list-block__item">
                        <div class="list-block__title">
                            <h3 class="h5">Смонтируем этот ролик</h3>
                        </div>
                        <div class="list-block__text">
                            <p>
                                Чтобы он выглядел сочно и привлекательно для зрителей
                            </p>
                        </div>
                    </div> <!-- end list-block__item -->
        
                    <div class="column list-block__item">
                        <div class="list-block__title">
                            <h3 class="h5">Красиво сфотографируем</h3>
                        </div>
                        <div class="list-block__text">
                            <p>
                                И ты сможешь выложить фотографию своего велика в интернет, чтобы другие люди увидели твой байк (примеры работ можешь посмотреть в нашем портфолио)
                            </p>
                        </div>
                    </div> <!-- end list-block__item -->
        
                    <div class="column list-block__item">
                        <div class="list-block__title">
                            <h3 class="h5">Наши услуги стоят не дорого</h3>
                        </div>
                        <div class="list-block__text">
                            <p>
                            Эта нужно для того, чтобы у нас были материальные ресурсы для сьемки следующих роликов 🤑
                            </p>
                        </div>
                    </div> <!-- end list-block__item -->

                </div> <!-- end process-list -->

            </section> <!-- end s-about -->


            <!-- services
            ----------------------------------------------- -->
            <section id="services" class="s-services target-section">

                <div class="row section-header" data-num="02">
                    <h3 class="column lg-12 section-header__pretitle text-pretitle">Где мы?</h3>
                    <div class="column lg-6 stack-on-1100 section-header__primary">
                        <h2 class="title text-display-1">
                            Нас легко найти
                        </h2>
                    </div>
                    <div class="column lg-6 stack-on-1100 section-header__secondary">
                        <p class="desc">
                            Если понравилось наше творчество можешь перейти по ссылкам ниже и подписаться на наш канал и группу в VK:
                            <!-- <a href="vk.com/club226196490">vk.com/club226196490</a> -->
                            <!-- <br> -->
                            <a href="https://www.youtube.com/@RoadEagles50">www.youtube.com/@RoadEagles50</a><br />
                            У нас есть <a href="https://rutube.ru/channel/56211314/">RuTube</a>, между прочим!
                        </p>
                    </div>
                </div> <!-- end section-header -->

                <div class="row services-list list-block block-lg-one-half block-tab-whole">
    
        
                </div> <!-- end process-list -->

            </section> <!-- end s-services -->


            <!-- portfolio
            ----------------------------------------------- -->
            <section id="folio" class="s-folio target-section">

                <div class="row section-header light-on-dark" data-num="03">
                    <h3 class="column lg-12 section-header__pretitle text-pretitle">Наши работы — фотографии</h3>
                    <div class="column lg-6 stack-on-1100 section-header__primary">
                        <h2 class="title text-display-1">
                            Помимо видео-роликов у нас есть опыт в фотографии
                        </h2>
                    </div>
                    <div class="column lg-6 stack-on-1100 section-header__secondary">
                        <p class="desc">
                            Хорошая фотография говорит гораздо больше чем посредственный видео-ролик
                        </p>
                    </div>
                </div> <!-- end section-header -->

                <div id="bricks" class="row bricks">
                    <div class="column lg-12 masonry">
                        <div class="bricks-wrapper">

                            <div class="grid-sizer"></div>

                            <article class="brick brick--double entry">
                                <a href="#modal-01" class="entry__link">
                                    <div class="entry__thumb">
                                        <img src="/images/gallery/1-gallery.jpg" alt="">
                                    </div>
                                    <div class="entry__info">
                                        <div class="entry__cat"></div>
                                        <h4 class="entry__title"></h4>
                                    </div>
                                </a>
                            </article> <!-- entry -->

                            <article class="brick brick--double entry">
                                <a href="#modal-02" class="entry__link">
                                    <div class="entry__thumb">
                                        <img src="/images/gallery/2-gallery.jpg" alt="">
                                    </div>
                                    <div class="entry__info" v-show="false">
                                        <div class="entry__cat"></div>
                                        <h4 class="entry__title"></h4>
                                    </div>
                                </a>
                            </article> <!-- entry -->

                            <article class="brick entry">
                                <a href="#modal-03" class="entry__link">
                                    <div class="entry__thumb">
                                        <img src="/images/gallery/3-gallery.jpg" alt="">
                                    </div>
                                    <div class="entry__info" v-show="false">
                                        <div class="entry__cat"></div>
                                        <h4 class="entry__title"></h4>
                                    </div>
                                </a>
                            </article> <!-- entry -->

                            <article class="brick entry">
                                <a href="#modal-04" class="entry__link">
                                    <div class="entry__thumb">
                                        <img src="/images/gallery/4-gallery.jpg" alt="">
                                    </div>
                                    <div class="entry__info" v-show="false">
                                        <div class="entry__cat"></div>
                                        <h4 class="entry__title"></h4>
                                    </div>
                                </a>
                            </article> <!-- entry -->

                            <article class="brick entry">
                                <a href="#modal-05" class="entry__link">
                                    <div class="entry__thumb">
                                        <img src="/images/gallery/5-gallery.jpg" alt="">
                                    </div>
                                    <div class="entry__info" v-show="false">
                                        <div class="entry__cat"></div>
                                        <h4 class="entry__title"></h4>
                                    </div>
                                </a>
                            </article> <!-- entry -->

                            <article class="brick entry">
                                <a href="#modal-06" class="entry__link">
                                    <div class="entry__thumb">
                                        <img src="/images/gallery/6-gallery.jpg" alt="">
                                    </div>
                                    <div class="entry__info" v-show="false">
                                        <div class="entry__cat"></div>
                                        <h4 class="entry__title"></h4>
                                    </div>
                                </a>
                            </article> <!-- entry -->

                        </div> <!-- end bricks-wrapper -->
                    </div> <!-- end masonry -->
                </div> <!-- end bricks -->


                <!-- modal templates popup
                -------------------------------------------- -->
                <div id="modal-01" hidden>
                    <div class="modal-popup">
                        <img src="/images/gallery/1-gallery.jpg" alt="">
            
                        <div class="modal-popup__desc">
                            <h5></h5>
                            <p></p>
                            <ul class="modal-popup__cat">
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
            
                    </div>
                </div> <!-- end modal -->

                <div id="modal-02" hidden>
                    <div class="modal-popup">
                        <img src="/images/gallery/2-gallery.jpg" alt="">
            
                        <div class="modal-popup__desc">
                            <ul class="modal-popup__cat">
                            </ul>
                        </div>
            
                    </div>
                </div> <!-- end modal -->

                <div id="modal-03" hidden>
                    <div class="modal-popup">
                        <img src="/images/gallery/3-gallery.jpg" alt="">
            
                        <div class="modal-popup__desc">
                        </div>
            
                    </div>
                </div> <!-- end modal -->

                <div id="modal-04" hidden>
                    <div class="modal-popup">
                        <img src="/images/gallery/4-gallery.jpg" alt="">
            
                        <div class="modal-popup__desc">
                        </div>
            
                    </div>
                </div> <!-- end modal -->

                <div id="modal-05" hidden>
                    <div class="modal-popup">

                        <img src="/images/gallery/5-gallery.jpg" alt="">
            
                        <div class="modal-popup__desc">
                        </div>
            
                    </div>
                </div> <!-- end modal -->

                <div id="modal-06" hidden>
                    <div class="modal-popup">
                        <img src="/images/gallery/6-gallery.jpg" alt="">
            
                        <div class="modal-popup__desc">
                        </div>
                    </div>
                </div> <!-- end modal -->


                <!-- clients
                -------------------------------------------- -->
                <div class="s-clients row" v-if="false">
                    <div class="column lg-12">

                        <div class="row section-header">
                            <div class="column lg-12">
                                <h3 class="title text-display-1">Brands we have had priveledge to work with</h3>
                            </div>
                        </div> <!-- end section-header -->
    
                        <div class="row clients-list block-lg-one-fourth block-md-one-third block-tab-one-half block-stack">
    
                            <div class="column clients-list__item">
                                <a href="#0">
                                    <img src="/images/clients/snowflake.svg" alt="">
                                </a>
                            </div>
                            <div class="column clients-list__item">
                                <a href="#0">
                                    <img src="/images/clients/flash.svg" alt="">
                                </a>
                            </div>
                            <div class="column clients-list__item">
                                <a href="#0">
                                    <img src="/images/clients/rise.svg" alt="">
                                </a>
                            </div>
                            <div class="column clients-list__item">
                                <a href="#0">
                                    <img src="/images/clients/pinpoint.svg" alt="">
                                </a>
                            </div>
                            <div class="column clients-list__item">
                                <a href="#0">
                                    <img src="/images/clients/proline.svg" alt="">
                                </a>
                            </div>
                            <div class="column clients-list__item">
                                <a href="#0">
                                    <img src="/images/clients/vision.svg" alt="">
                                </a>
                            </div>
                            <div class="column clients-list__item">
                                <a href="#0">
                                    <img src="/images/clients/volume.svg" alt="">
                                </a>
                            </div>
                            <div class="column clients-list__item">
                                <a href="#0">
                                    <img src="/images/clients/hitech.svg" alt="">
                                </a>
                            </div>

                        </div> <!-- clients-list -->
                    </div> <!-- end column lg-12 -->
                </div> <!-- end s-clients -->

            </section> <!-- end s-folio -->


            <!-- testimonials
            ----------------------------------------------- -->
            <section id="testimonials" class="s-testimonials" v-show="false">

                <div class="row s-testimonials__content">
                    <div class="column lg-12">
        
                        <div class="swiper-container s-testimonials__slider">
        
                            <div class="swiper-wrapper">
    
                                <div class="s-testimonials__slide swiper-slide">
                                    <div class="s-testimonials__author">
                                        <img src="/images/avatars/user-02.jpg" alt="Author image" class="s-testimonials__avatar">
                                        <cite class="s-testimonials__cite">
                                            <strong>John Rockefeller</strong>
                                            <span>Standard Oil Co.</span>
                                        </cite>
                                    </div>
                                    <p>
                                    Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. 
                                    Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum.
                                    Laudantium quia consequatur molestias.
                                    </p>
                                </div> <!-- end s-testimonials__slide -->
                
                                <div class="s-testimonials__slide swiper-slide">
                                    <div class="s-testimonials__author">
                                        <img src="/images/avatars/user-03.jpg" alt="Author image" class="s-testimonials__avatar">
                                        <cite class="s-testimonials__cite">
                                            <strong>Andrew Carnegie</strong>
                                            <span>Carnegie Steel Co.</span>
                                        </cite>
                                    </div>
                                    <p>
                                    Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                                    Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis.
                                    Quasi voluptas eius distinctio. Atque eos maxime.
                                    </p>
                                </div> <!-- end s-testimonials__slide -->
                
                                <div class="s-testimonials__slide swiper-slide">
                                    <div class="s-testimonials__author">
                                        <img src="/images/avatars/user-01.jpg" alt="Author image" class="s-testimonials__avatar">
                                        <cite class="s-testimonials__cite">
                                            <strong>John Morgan</strong>
                                            <span>JP Morgan & Co.</span>
                                        </cite>
                                    </div>
                                    <p>
                                    Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  
                                    Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.
                                    Voluptatem dignissimos ut.
                                    </p>
                                </div> <!-- end s-testimonials__slide -->
        
                                <div class="s-testimonials__slide swiper-slide">
                                    <div class="s-testimonials__author">
                                        <img src="/images/avatars/user-06.jpg" alt="Author image" class="s-testimonials__avatar">
                                        <cite class="s-testimonials__cite">
                                            <strong>Henry Ford</strong>
                                            <span>Ford Motor Co.</span>
                                        </cite>
                                    </div>
                                    <p>
                                    Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis 
                                    quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita voluptas odit. 
                                    Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                                    </p>
                                </div> <!-- end s-testimonials__slide -->
            
                            </div> <!-- end swiper-wrapper -->
        
                            <div class="swiper-pagination"></div>
        
                        </div> <!-- end swiper-container -->
        
                    </div> <!-- end column -->
                </div> <!-- end s-testimonials__content -->

            </section> <!-- end testimonials -->

        </section>  <!-- end content -->


        <!-- # site-footer
        ================================================== -->
        <footer id="footer" class="s-footer target-section">

            <div class="row section-header" data-num="04">
                <h3 class="column lg-12 section-header__pretitle text-pretitle">Йоу!</h3>
                <div class="column lg-6 stack-on-1100 section-header__primary">
                    <h2 class="title text-display-1">
                    Давай забацаем классный видос про твой велик, ну или фотографии сделаем?
                    </h2>
                </div>    
                <div class="column lg-6 stack-on-1100 section-header__secondary">
                    
                    <div class="contact-block" v-if="false">
                        <h6>Where To Find Us</h6>
                        <p>
                        1600 Amphitheatre Parkway <br>
                        Mountain View, California <br>
                        94043  US
                        </p>
                    </div>

                    <div class="contact-block" v-if="false">
                        <h6>Contact Infos</h6>
                        <ul class="contact-list">
                            <li><a href="tel:197-543-2345">+197 543 2345</a></li>
                            <li><a href="tel:197-123-9876">+197 123 9876</a></li>
                        </ul>
                    </div>

                </div>
            </div> <!-- end section-header -->

            <div class="row list-block block-lg-one-half block-tab-whole block-stack-on-1000 s-footer__btns">
                <div class="column list-block__item">
                    <div class="s-footer__contact-btn">
                        <a
                            v-if="!emailSent"
                            href="mailto:spam@bikecontent.ru" class="btn btn--primary u-fullwidth">
                            Пиши-пиши нам
                        </a>
                    </div>
                </div>
                <div class="column list-block__item">
                    <div class="subscribe-form s-footer__subscribe">
                        <h6
                            v-if="!emailSent"
                        >Ну, или оставь заявку, а мы выйдем на связь сами</h6>
                        <h6
                            v-if="emailSent"
                        >О! Классно! Мы с тобой свяжемся в течение пары дней</h6>
                        <form
                            v-if="!emailSent"
                            id="mc-form" 
                            class="mc-form"
                        >
                            <input
                                v-model="email"
                                type="email"
                                name="EMAIL"
                                id="mce-EMAIL"
                                class="u-fullwidth text-center"
                                placeholder="Email"
                                title="The domain portion of the email address is invalid (the portion after the @)." pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$" required>
                            <input
                                @click="sendMessage"
                                type="submit"
                                name="subscribe"
                                value="Отправить"
                                class="btn btn--primary u-fullwidth"
                            >
                            <!-- <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_cdb7b577e41181934ed6a6a44_9a91cfe7b3" tabindex="-1" value=""></div> -->
                            <div class="mc-status"></div>
                        </form>
                    </div>
                </div>
            </div> <!-- end s-footer__btns -->

            <div class="row s-footer__bottom">

                <div class="column lg-6 tab-12 s-footer__bottom-left"></div>

                <div class="column lg-6 tab-12 s-footer__bottom-right">
                    <div class="ss-copyright">
                        <span>© Bikecontent 2025</span> 
                    </div>
                </div>

            </div> <!-- s-footer__bottom -->
    
            <div class="ss-go-top">
                <a class="smoothscroll" title="Back to Top" href="#top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"></path></svg>
                </a>
            </div> <!-- end ss-go-top -->
    
        </footer> <!-- end footer -->

        </div>
</template>


<script setup>
let email = ref('')
let emailSent = ref(false)

useHead({
    bodyAttrs: {
        class: 'js ss-show',
    }
})
let sendMessage = async () => {
    $fetch('/api/send-order', {
        method: 'POST',
        body: { email: email.value }
    }).then(() => {
        emailSent.value = true
    })
}
</script>
