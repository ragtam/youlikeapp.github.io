<template>
    <div class="q-pa-xl">
        <h1>Установка расширения</h1>
        <q-list bordered class="rounded-borders">
            <q-item>
                <q-item-section avatar top>
                    <q-icon name="fab fa-chrome" size="34px" />
                </q-item-section>

                <q-item-section top class="col-2 gt-sm">
                    <q-item-label class="q-mt-sm">Google Chrome</q-item-label>
                </q-item-section>

                <q-item-section top>
                    <q-item-label>
                        <span class="text-grey-8">
                            Данное расширение позволит добавлять видео в список для проверки
                            прямо со страницы YouTube. Достаточно будет лишь нажать на
                            кнопку "Добавить в YouLike", расположенную под кнопками лайка и
                            дизлайка.
                        </span>
                    </q-item-label>
                    <q-item-label
                        lines="1"
                        class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                    >
                        <span
                            type="a"
                            href="https://chrome.google.com/webstore/detail/youlike-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BB%D0%B0/bpnhjhdmbhnjkhemgmfahahohblnombi"
                            class="cursor-pointer"
                        >Установить расширение для Google Chrome</span>
                    </q-item-label>
                </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item>
                <q-item-section avatar top>
                    <q-icon name="fab fa-firefox" size="34px" />
                </q-item-section>

                <q-item-section top class="col-2 gt-sm">
                    <q-item-label class="q-mt-sm">Mozilla Firefox</q-item-label>
                </q-item-section>

                <q-item-section top>
                    <q-item-label lines="1">
                        <span
                            class="text-grey-8"
                        >По этой же ссылке можно установить расширение для Я.Браузер.</span>
                    </q-item-label>
                    <q-item-label
                        lines="1"
                        class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                    >
                        <span
                            type="a"
                            href="https://addons.mozilla.org/ru/firefox/addon/youlike-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BB%D0%B0%D0%B9%D0%BA%D0%BE%D0%B2/"
                            class="cursor-pointer"
                        >Установить расширение для Mozilla Firefox</span>
                    </q-item-label>
                </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item>
                <q-item-section avatar top>
                    <q-icon name="fab fa-opera" size="34px" />
                </q-item-section>

                <q-item-section top class="col-2 gt-sm">
                    <q-item-label class="q-mt-sm">Opera</q-item-label>
                </q-item-section>

                <q-item-section top>
                    <q-item-label>
                        <span
                            class="text-grey-8"
                        >Модераторы Opera рассматривают расширение дольше президентского срока Путина, но уже сейчас его можно установить из Chrome Web Store. Для этого нужно сначала установить</span>
                    </q-item-label>
                    <q-item-label
                        caption
                        lines="1"
                    >Install Chrome Extensions выдаст сообщение о том, как завершить установку (читать необязательно). После нажатия на "ОК" откроется страница расширений Opera, на которой появится расширение YouLike. Останется лишь нажать на кнопку "Установить", расположенную справа от названия.</q-item-label>
                    <q-item-label
                        lines="1"
                        class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
                    >
                        <span
                            type="a"
                            href="https://addons.opera.com/ru/extensions/details/download-chrome-extension-9/"
                            class="cursor-pointer"
                        >Install Chrome Extensions</span>
                        , затем пройти по
                        <span
                            type="a"
                            href="https://chrome.google.com/webstore/detail/youlike-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BB%D0%B0/bpnhjhdmbhnjkhemgmfahahohblnombi"
                            class="cursor-pointer"
                        >этой ссылке</span>
                    </q-item-label>
                </q-item-section>
            </q-item>
        </q-list>

        <!-- <h1>Установка расширения</h1>
        <div>
            <p>
                Данное расширение позволит добавлять видео в список для проверки
                прямо со страницы YouTube. Достаточно будет лишь нажать на
                кнопку "Добавить в YouLike", расположенную под кнопками лайка и
                дизлайка.
            </p>
            <h2>
                <q-icon name="fab fa-chrome" />Google Chrome
            </h2>
            <p>
                <a
                    href="https://chrome.google.com/webstore/detail/youlike-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BB%D0%B0/bpnhjhdmbhnjkhemgmfahahohblnombi"
                    target="_blank"
                >Установить расширение для Google Chrome</a>
            </p>
            <p>По этой же ссылке можно установить расширение для Я.Браузер.</p>
            <h2>
                <q-icon name="fab fa-firefox" />Mozilla Firefox
            </h2>
            <p>
                <a
                    href="https://addons.mozilla.org/ru/firefox/addon/youlike-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BB%D0%B0%D0%B9%D0%BA%D0%BE%D0%B2/"
                    target="_blank"
                >Установить расширение для Mozilla Firefox</a>
            </p>
            <h2>
                <q-icon name="fab fa-opera" />Opera
            </h2>
            <div>
                <p>
                    Модераторы Opera рассматривают расширение
                    <span>дольше президентского срока Путина</span>, но уже
                    сейчас его можно установить из Chrome Web Store. Для этого
                    нужно сначала установить
                    <a
                        href="https://addons.opera.com/ru/extensions/details/download-chrome-extension-9/"
                        target="_blank"
                    >Install Chrome Extensions</a>, затем пройти по
                    <a
                        href="https://chrome.google.com/webstore/detail/youlike-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BB%D0%B0/bpnhjhdmbhnjkhemgmfahahohblnombi"
                        target="_blank"
                    >этой ссылке</a>
                    и нажать на кнопку "Установить".
                </p>
                <p>
                    Install Chrome Extensions выдаст сообщение о том, как
                    завершить установку (читать необязательно). После нажатия на
                    "ОК" откроется страница расширений Opera, на которой
                    появится расширение YouLike. Останется лишь нажать на кнопку
                    "Установить", расположенную справа от названия.
                </p>
            </div>
        </div>-->
    </div>
</template>

<script>
export default {};
</script>

<style></style>
