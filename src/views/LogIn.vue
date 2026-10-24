<template>
    <div>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div class="mb-2">
                <label class="block mb-2.5 text-sm font-medium text-heading">Login page</label>  
            </div>
            <div>
                <label  class="block mb-2.5 text-sm font-medium text-heading">Email </label>
                <input type="email" placeholder="email@gmail.com" class="border-2 border-gray-300 p-2 rounded-md w-full" required />     
                <p class="text-xs text-yellow-500" v-if="emailError">{{ emailError }}</p>        
            </div>
            <div>
                <label class="block mb-2.5 text-sm font-medium text-heading">Password</label>
                <input type="password" placeholder="Enter your password" class="border-2 border-gray-300 p-2 rounded-md w-full"/>
                <p class="text-xs text-yellow-500" v-if="passwordError">{{ passwordError }}</p>
            </div>
            <div>
                <label class="block mb-2.5 text-sm font-medium text-heading">Confirm password</label>
                <input type="password" placeholder="Confirm your password" class="border-2 border-gray-300 p-2 rounded-md w-full"/>
                <p class="text-xs text-blue-400" v-if="confirmPasswordError">{{ confirmPasswordError }}</p>
            </div>
            <div>
                <label class="block mb-2.5 text-sm font-medium text-heading">Address</label>
                <input type="text" placeholder="Enter your address" class="border-2 border-gray-300 p-2 rounded-md w-full"/>
                <p class="text-xs text-blue-400" v-if="confirmAddress"> {{ Address }} </p>
            </div>
            <button type="submit" class="text-white bg-brand box-border border border-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
        </div>
    </div>
</template>
<script>
export default {
    data (){
        return {
            email: "",
            password:"",
            emailError: "",
        }
    }, 
methods:{
    submits(){
        this.emailError = "";
        this.password = ""; 
    }
}
}
</script>