<template>
    <div class="page">
        <h4>Thêm Liên hệ</h4>
        <ContactForm :contact=" {} " @submit:contact=" addContact " />
        <p>{{ message }}</p>
    </div>
</template>
  
<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
    components: {
        ContactForm,
    },
    data ()
    {
        return {
            message: "",
        };
    },
    methods: {
        async addContact ( data )
        {
            try
            {
                await ContactService.create( data );
            } catch ( error )
            {
                console.log( error );
            }
            if ( confirm( "Thêm liên hệ thành công." ) )
            {
                this.$router.push( { name: "contactbook" } );
            }
        },
    },
};
</script>
  