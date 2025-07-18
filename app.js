// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 显示最后更新时间
    document.getElementById('update-date').textContent = articlesData.lastUpdated;
    
    // 为每个分类生成文章卡片
    articlesData.categories.forEach(category => {
        const container = document.getElementById(category.id);
        
        category.articles.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.className = 'article-card';
            
            articleCard.innerHTML = `
                <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                <p>${article.summary}</p>
                <small>发布日期: ${article.date}</small>
            `;
            
            container.appendChild(articleCard);
        });
    });
});
