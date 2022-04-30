import Api from "../Axios/Api";
const ARTICLE_API="/articles"
//cc_token local storage 


    const fetchArticles=async()=> {
        const token = localStorage.CC_Token
        return await Api.get(ARTICLE_API, {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
            },
            })
            }
            
     const fetchArticleById=async(articleId)=> {
        return await Api.get(ARTICLE_API + '/' + articleId);
        }
    const deleteArticle=async(articleId) =>{
        return await Api.delete(ARTICLE_API + '/' + articleId);
        }
     const addArticle=async(article)=> { 
        return await Api.post(""+ARTICLE_API, article);
    
        }    
     const editArticle=(article) =>{ 
         console.log(article)
        return Api.put(ARTICLE_API + '/' + article._id, article);

    
        }
    export const ArticleService = {
        fetchArticles,
        fetchArticleById,
        deleteArticle,
        addArticle,
        editArticle
    }