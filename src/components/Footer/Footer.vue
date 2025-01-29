<script lang="js">
</script>
<template>
    <div class="app-footer pt-4">
        <CustomTitle spanText="NOSSOS ENDEREÇOS"/>
        <div class="grid-3-h address">
            <div class="left-grid location">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5909.598472902616!2d-47.891090280984336!3d-15.742275490991554!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a298ea90d53%3A0x9906dd7c129c96f8!2sValentina%20Pizzaria%20Asa%20Norte!5e1!3m2!1spt-BR!2sbr!4v1726929706106!5m2!1spt-BR!2sbr" 
                    width="400"
                    height="350"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                <p class="align-start">
                    CLN 214 Bloco A – Asa Norte <br>
                    Tel: 61 3340-9898 
                </p>
            </div>
            <div class="middle-grid location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5002.013278708679!2d-47.91537518594259!3d-15.819693214996327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3ab205aedd8d%3A0x441382adb80aa727!2sValentina%20Pizzaria%20%7C%20Asa%20Sul!5e1!3m2!1spt-BR!2sbr!4v1726929866485!5m2!1spt-BR!2sbr" 
                    width="400"
                    height="350"
                    style="border:0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>

                <p class="align-start">
                    CLS 310 – Asa Sul <br>
                    Tel: 61 3242-6000 
                </p>
            </div>
            <div class="right-grid location">
                <iframe
                width="400"
                height="350"
                class="lago-sul"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8237.631550606106!2d-47.83640894043993!3d-15.858817435978677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2328e64fcf89%3A0xc98f5a06f8baec04!2sValentina%20Pizzaria%20Lago%20Sul!5e1!3m2!1spt-BR!2sbr!4v1726930597577!5m2!1spt-BR!2sbr" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
                <p class="align-start">
                    SMDB Conjunto 12 – Qi 23 Lago Sul - Posto Ipiranga <br>
                    Tel: 61 99571-6969
                </p>
            </div>
        </div>

        <div class="full-grid">
            
        </div>
        
        
        <span class="mt-10 ml-5">Valentina Pizzaria &#174; 2025</span>
    </div>    
</template>
<style lang="css">
.app-footer {
    background-color: #2B3A41;
    text-align: start;
    padding: 10vh;
}
.address > div {
    margin: auto;
}

.location {
    text-align: center;
}

@media (max-width: 1350px) {
    .address {
        grid-template-columns: 50% 50%;
    }
}

@media (max-width: 1020px) {
    .address {
        grid-template-columns: 100%;
    }

    .app-footer {
        padding: 0;
    }
}
</style>