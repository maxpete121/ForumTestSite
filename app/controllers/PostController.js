import { api } from "../services/AxiosService.js"



export class PostController{
    constructor(){

    }


    async getPosts(){
        try {
            event.preventDefault()
            const form = event.target
            const postData = getFormData(form)
            await postService.newPost(postData)
            form.reset()
        } catch (error) {
            
        }
    }

    async newPost(){
        try {
            
        } catch (error) {
            
        }
    }
}