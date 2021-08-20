var container = document.createElement('div')
container.setAttribute('class','container')

    var row = document.createElement('div')
    row.setAttribute('class','row')

        var column=document.createElement('div');
        column.setAttribute('class','col-12')

            var form = document.createElement('form')
                var form_row = document.createElement('div');
                form_row.setAttribute('class','form-row')

                    var form_col1 = document.createElement('div')
                    form_col1.setAttribute('class','form-group col-md-6')

                        var label1 = document.createElement('label')
                        label1.for ='inputfirstname'
                        label1.innerHTML ='First Name'

                        var input1 = document.createElement('input')
                        input1.setAttribute('class','form-control')
                        input1.type='text'
                        input1.id='inputfirstname'

                    form_col1.append(label1,input1)

                    var form_col2 = document.createElement('div')
                    form_col2.setAttribute('class','form-group col-md-6')

                        var label2 = document.createElement('label')
                        label2.for ='inputlastname'
                        label2.innerHTML ='Last Name'

                        var input2 = document.createElement('input')
                        input2.setAttribute('class','form-control')
                        input2.type='text'
                        input2.id='inputlastname'

                    form_col2.append(label2,input2)
                form_row.append(form_col1,form_col2)

                var form_row1=document.createElement('div')
                form_row1.setAttribute('class','form-row')
                    var column1 = document.createElement('div')
                    column1.setAttribute('class','form-group col-md-6')

                        var label3 = document.createElement('label')
                        label3.for ='inputaddress'
                        label3.innerHTML ='Address'

                        var input3 = document.createElement('input')
                        input3.setAttribute('class','form-control')
                        input3.type='text'
                        input3.id='inputaddress'
                        input3.placeholder='123 Main st'

                    column1.append(label3,input3)
                form_row1.appendChild(column1)

                var form_row2 = document.createElement('div')
                form_row2.setAttribute('class','form-row')

                    var column_2=document.createElement('div')
                    column_2.setAttribute('class','form-group col-md-3')

                        var label_gender = document.createElement('label')
                        label_gender.for ='inputgender'
                        label_gender.innerHTML ='Gender'

                        var select_options = document.createElement('select')
                        select_options.setAttribute('class','form-control')
                        select_options.id ='inputgender'

                            var opt1 = document.createElement('option')
                            opt1.innerHTML ='Choose'
                            var opt2 = document.createElement('option')
                            opt2.innerHTML ='Male'
                            var opt3 = document.createElement('option')
                            opt3.innerHTML ='Female'

                        select_options.append(opt1,opt2,opt3)
                    column_2.append(label_gender,select_options)
                form_row2.appendChild(column_2)

                var form_row3 = document.createElement('div')
                form_row3.setAttribute('class','form-row')

                    var column_3 = document.createElement('div')
                    column_3.setAttribute('class','form-group col-md-4')

                        var label_state = document.createElement('label')
                        label_state.for ='inputstate'
                        label_state.innerHTML ='State'

                        var select = document.createElement('select')
                        select.setAttribute('class','form-control')
                        select.id = 'inputstate'

                            var option1 = document.createElement('option')
                            option1.innerHTML = 'Choose...'
                            var option2 = document.createElement('option')
                            option2.innerHTML = 'Tamil Nadu'
                            var option3 = document.createElement('option')
                            option3.innerHTML = 'Kerala'
                            var option4 = document.createElement('option')
                            option4.innerHTML = 'Karnataka'
                            var option5 = document.createElement('option')
                            option5.innerHTML = 'Andhra Pradesh'

                        select.append(option1,option2,option3,option4,option5)
                    column_3.append(label_state,select)

                    var column_4=document.createElement('div')
                    column_4.setAttribute('class','form-group col-md-4')

                        var label_country = document.createElement('label')
                        label_country.for ='inputcountry'
                        label_country.innerHTML ='Country'

                        var input_country = document.createElement('input')
                        input_country.setAttribute('class','form-control')
                        input_country.type='text'
                        input_country.id='inputcountry'

                    column_4.append(label_country,input_country)

                    var column_5 = document.createElement('div')
                    column_5.setAttribute('class','form-group col-md-4')

                        var label_zip = document.createElement('label')
                        label_zip.for ='inputzip'
                        label_zip.innerHTML ='Zip'

                        var input_zip = document.createElement('input')
                        input_zip.setAttribute('class','form-control')
                        input_zip.type='text'
                        input_zip.id='inputzip'

                    column_5.append(label_zip,input_zip)
                form_row3.append(column_3,column_4,column_5)

                var form_row4 = document.createElement('div')
                form_row4.setAttribute('class','form-row')

                    var column_6 = document.createElement('div')
                    column_6.setAttribute('class','form-group col-md-1')

                        var submit = document.createElement('button')
                        submit.setAttribute('class','btn btn-primary')
                        submit.id='add'
                        submit.type='button'
                        submit.innerHTML ='Submit'

                    column_6.appendChild(submit)

                    var column_7 = document.createElement('div')
                    column_7.setAttribute('class','form-group col-md-1')

                        var clear = document.createElement('button')
                        clear.setAttribute('class','btn btn-primary')
                        clear.type='reset'
                        clear.innerHTML='Clear'

                        column_7.appendChild(clear)
                form_row4.append(column_6,column_7)
            form.append(form_row,form_row1,form_row2,form_row3,form_row4)
        
        column.appendChild(form)
    row.appendChild(column)




    var containercol = document.createElement('div')
    containercol.setAttribute('class','col-12 p-0')


        var table= document.createElement('table');
        table.setAttribute('class','table ')
        table.id ='our-table';  
            
                var trow = document.createElement('tr');
                    var th1= document.createElement('th');
                    th1.innerHTML = 'FirstName';
                    var th2= document.createElement('th');
                    th2.innerHTML = 'LastName';
                    var th3= document.createElement('th');
                    th3.innerHTML = 'Address';
                    var th4= document.createElement('th');
                    th4.innerHTML = 'Gender';
                    var th5= document.createElement('th');
                    th5.innerHTML = 'State';    
                    var th6= document.createElement('th');
                    th6.innerHTML = 'Country';
                    var th7= document.createElement('th');
                    th7.innerHTML = 'Zip';


                trow.append(th1,th2,th3,th4,th5,th6,th7);
        table.append(trow);   
	containercol.appendChild(table)
container.append(row,containercol)
document.body.append(container)

            

		       
				var currentrow = 1;

				var entry = document.getElementById('add');
				entry.addEventListener('click',display);
				function display()
		       	{
				    var firstname= document.getElementById('inputfirstname').value;
				    var lastname= document.getElementById('inputlastname').value;
				    var address= document.getElementById('inputaddress').value;
				    var gender= document.getElementById('inputgender').value;
				    var state= document.getElementById('inputstate').value;
				    var country= document.getElementById('inputcountry').value;
				    var zip= document.getElementById('inputzip').value;

				       			

				    if(!firstname || !lastname || !address || !gender || !state || !country || !zip)
				       	{
				       		alert('Please fill all the fields');
				       	}

				    var tablebody = document.getElementById('our-table');
				    
				    var newrow = tablebody.insertRow(currentrow);

				    var cell1 = newrow.insertCell(0);
				    var cell2 = newrow.insertCell(1);
				    var cell3 = newrow.insertCell(2);
				    var cell4 = newrow.insertCell(3);
				    var cell5 = newrow.insertCell(4);
				    var cell6 = newrow.insertCell(5);
				    var cell7 = newrow.insertCell(6);

				    cell1.innerHTML = firstname;
				    cell2.innerHTML = lastname;
				    cell3.innerHTML = address;
				    cell4.innerHTML = gender;
				    cell5.innerHTML = state;
				    cell6.innerHTML = country;
				    cell7.innerHTML = zip;

		       		currentrow++;
		       	}
		






