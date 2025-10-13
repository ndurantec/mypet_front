
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('address-form');
            const addAddressBtn = document.getElementById('add-address');
            let addressCount = 1;
            
        
            const telefoneInput = document.getElementById('telefone');
            telefoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length <= 10) {
                    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
                } else {
                    value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
                }
                e.target.value = value;
            });
            
           
            const cnpjInput = document.getElementById('cnpj');
            cnpjInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, '$1.$2.$3/$4-$5');
                e.target.value = value;
            });
            
          
            addAddressBtn.addEventListener('click', function() {
                addressCount++;
                const template = document.getElementById('address-template');
                const newAddress = template.cloneNode(true);
                newAddress.id = 'address-' + addressCount;
                
                
                const title = newAddress.querySelector('.address-title');
                title.textContent = 'Endereço Adicional ' + (addressCount - 1);
                
                
                const removeBtn = newAddress.querySelector('.remove-address');
                removeBtn.style.display = 'block';
                
               
                const inputs = newAddress.querySelectorAll('input, select');
                inputs.forEach(input => {
                    if (input.type !== 'button') {
                        input.value = '';
                        input.classList.remove('is-invalid');
                    }
                });
                
                
                removeBtn.addEventListener('click', function() {
                    newAddress.remove();
                    updateAddressTitles();
                });
                
              
                addAddressBtn.parentNode.insertBefore(newAddress, addAddressBtn);
                
                updateAddressTitles();
            });
            
            
            function updateAddressTitles() {
                const addresses = document.querySelectorAll('.address-group');
                addresses.forEach((address, index) => {
                    if (index === 0) {
                        address.querySelector('.address-title').textContent = 'Endereço Principal';
                    } else {
                        address.querySelector('.address-title').textContent = 'Endereço Adicional ' + index;
                    }
                });
            }
            
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
               
                let isValid = true;
                const requiredFields = form.querySelectorAll('[required]');
                
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.classList.add('is-invalid');
                    } else {
                        field.classList.remove('is-invalid');
                    }
                });
                
               
                const cnpjValue = cnpjInput.value.replace(/\D/g, '');
                if (cnpjValue.length !== 14) {
                    isValid = false;
                    cnpjInput.classList.add('is-invalid');
                }
                
               
                const emailInput = document.getElementById('email');
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value.trim())) {
                    isValid = false;
                    emailInput.classList.add('is-invalid');
                }
                
                if (isValid) {
                    
                    const successAlert = document.getElementById('success-alert');
                    successAlert.style.display = 'block';
                    
                    
                    successAlert.scrollIntoView({ behavior: 'smooth' });
                   
                    setTimeout(() => {
                        form.reset();
                        successAlert.style.display = 'none';
                        
                       
                        const additionalAddresses = document.querySelectorAll('.address-group:not(#address-template)');
                        additionalAddresses.forEach(address => address.remove());
                        
                     
                        addressCount = 1;
                    }, 3000);
                } else {
                  
                    const firstInvalidField = form.querySelector('.is-invalid');
                    if (firstInvalidField) {
                        firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            });
            
           
            const inputs = form.querySelectorAll('input, select');
            inputs.forEach(input => {
                input.addEventListener('input', function() {
                    if (this.value.trim()) {
                        this.classList.remove('is-invalid');
                    }
                });
            });
            
          
            form.addEventListener('reset', function() {
             
                const additionalAddresses = document.querySelectorAll('.address-group:not(#address-template)');
                additionalAddresses.forEach(address => address.remove());
                
                
                addressCount = 1;
                
                inputs.forEach(input => {
                    input.classList.remove('is-invalid');
                });
            });
        });
