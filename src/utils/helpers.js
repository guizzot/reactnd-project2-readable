export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('pt-BR')
  return d.toLocaleDateString() + ' ' + time.substr(0, 5) 
}

export function orderPosts (postsSortingBy, posts) {
  let postsIds = []
  if(postsSortingBy.Votos === true){
    postsIds = Object.keys(posts).sort(function(a,b){
                  return posts[b].voteScore - posts[a].voteScore
                })
  }
  if(postsSortingBy.Data === true){
    postsIds = Object.keys(posts).sort(function(a,b){
                return posts[b].timestamp - posts[a].timestamp
               })
  }
  return postsIds
}

