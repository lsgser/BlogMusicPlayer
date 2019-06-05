<template>
	<div class="container">
		<center><h3><u>Contact Us</u></h3></center>
		<br>
		<div class="alert alert-success" v-show="Success" role="alert">
			<center><h5>{{status}}</h5></center>
		</div>
		<div class="alert alert-danger" v-show="Danger" role="alert">
			<center><h5>{{status}}</h5></center>
		</div>
		<form>
		  <div class="form-group">
		    <label for="formGroupEmail">Email</label>
		    <input type="email" class="form-control" id="formGroupEmail" v-model="email" placeholder="Type your email here" required>
		  </div>
		  <div class="form-group">
		    <label for="formGroupSubject">Subject</label>
		    <input type="text" class="form-control" id="formGroupSubject" v-model="subject" placeholder="Type in your subject here" required>
		  </div>
		  <div class="form-group">
		    <label for="formControlTextarea">Message (Optional)</label>
		    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type in your message here (Optional)" v-model="message"></textarea>
		  </div>
		  <button class="btn btn-dark btn-lg btn-block" @click="Send" v-show="!Sending">Send</button>
		  <p class="btn btn-dark btn-lg btn-block sending" v-show="Sending"><img src="gifs/Rolling_Dark_Blue.gif" width="20px" height="20px"/></p>
		</form>
		<center><router-link class="btn btn-outline-dark mt-5" to="/developer" >Developer of the Site</router-link></center>
	</div>
</template>

<script>
	import axios from 'axios';

	export default{
		name:'Contacts',
		computed:
		{
			Sending()
			{
				return this.sending
			},
			Success()
			{
				return this.success
			},
			Danger()
			{
				return this.danger
			}
		},
		methods:
		{
			Send:function()
			{
				this.success = false
				this.danger = false
				if(this.validEmail(this.email) && this.subject)
				{
					var self = this
					self.sending = true
					axios.post('https://www.6itygang.com/api/mail/post.php',{email:this.email,subject:this.subject,text:this.message}).then(function(res){
						if(res.data.status=='Success')
						{
							self.status = 'Message/Mail Sent'
							self.success = true
							self.email = ''
							self.subject = ''
							self.message =''
						}
						else
						{
							self.status = res.data.status
							self.danger = true
						}
						self.sending = false
					})
				}
				else
				{
					this.status = 'Enter a valid email and also a subject'
					this.danger=true
				}
			},
			validEmail: function (email) {
		      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		      return re.test(email);
		    }
		},
		beforeMount:function(){
			//this.$store.dispatch('loadContactData')
		},
		data(){
			return {email:'',subject:'',message:'',sending:false,status:'',success:false,danger:false}
		}
	}
</script>
<style>
.container{
	font-family:'Permanent Marker' ,'Avenir', Helvetica, sans-serif !important;
	font-size: 1.2em;	
}

</style>