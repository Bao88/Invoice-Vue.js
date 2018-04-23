new Vue({
    el: "#invoice-creator",
    data: () => ({
        valid: true,
        customer: {
            name: '',
            nameRules: [
            v => !!v || 'Name is required'
            ],
        address1: "",
        address2: "",
        address3: "",
        postalCode: "",
        postalPlace: "",
        country: "",
        landline: "",
        mobile: "",
        email: '',
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
        },
        invoice: {
            articleNumber: "",
        text1: "",
        text2: "",
        text3: "",
        unit: "",
        quantity: "",
        unitPrice: "",
        discountRate: "",
        netPrice: "",
        vatRate: "",
        vatAmount: "",
        items: [
            { text: 'Norway' },
            { text: 'Sweden' },
            { text: 'Denmark' }
          ]
        },
        invoices: []
      }),
      watch: {
        
      },
      methods: {
        submit () {
          if (this.$refs.form.validate()) {
            // Native form submission is not yet supported
            console.log(this.$refs.form);
            console.log(this.$refs.form.$el);
            const data = {};
            const dataContainer = document.getElementsByTagName("input");
            console.log(dataContainer);
            // console.log(this.data);
            // axios.post('/api/submit', {
            //   name: this.name,
            //   email: this.email,
            //   select: this.select,
            //   checkbox: this.checkbox
            // })
          }
        },
        clear () {
          this.$refs.form.reset()
        },
        addInvoice () {
            this.invoices.push(Vue.util.extend({}, this.invoice))
        },
        removeInvoice(index) {
            Vue.delete(this.invoices, index);
        }
      }
    })