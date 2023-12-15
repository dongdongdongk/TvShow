const form = document.querySelector('#searchForm');
form.addEventListener('submit',async function(e){
    e.preventDefault();
    // 입력한 값 저장
    const searchTerm = form.querySelector('input[name="query"]').value;
    // config 를 만들어서 파라미터를 만들어서 axios 에 넣어줌 
    const config = { params : { q : searchTerm, isFunny : 'colt'} }
    // 템플릿 리터럴 ` 를 사용
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config)
    makeImages(res.data);
    form.querySelector('input[name="query"]').value = "";
});

const makeImages = (shows) => {
    for(let result of shows) {
        if(result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}