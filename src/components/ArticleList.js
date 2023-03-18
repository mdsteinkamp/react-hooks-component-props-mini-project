import React from "react";
import Article from "./Article"

function ArticleList({posts}) {
    console.log(posts)
    const articleItems = posts.map((post) => {
        return <Article key={post.id} title={post.title} date={post.date} minutes={post.minutes} preview={post.preview} />
    })

    return (
        <main>
            {articleItems}
        </main>
    )
}

export default ArticleList


////////////////////////////////////////////////////
// import React from "react";
// import Article from "./Article"

// function ArticleList({articles}) {
//     console.log(articles)
//     const articleItems = articles.map((article) => {
//         return <Article key={article.id} title={article.title} date={article.date} minutes={article.minutes} preview={article.preview} />
//     })

//     return (
//         <main>
//             {articleItems}
//         </main>
//     )
// }

// export default ArticleList