const text=document.getElementById("quote-display");
        const authorname=document.getElementById("author");
        const tweetbutton=document.getElementById("tweet");
        const copy1=document.getElementById("copy");
        async function newquote(){
        var url="https://type.fit/api/quotes";
        const response=await fetch(url);
        const allquotes=await response.json();
        const index=Math.floor(Math.random()*allquotes.length);
        const quote=allquotes[index].text;
        const author=allquotes[index].author;
        if(author==null){
            author="Muhammad ali mirza";
        }
        text.innerHTML=quote;
        authorname.innerHTML=author;
        tweetbutton.removeAttribute("aria-disabled");
        copy1.removeAttribute("aria-disabled");
        tweetbutton.href="https://twitter.com/intent/tweet?text="+quote+"  "+author;
        };
        function copy(){
            var copytext=document.getElementById("quote-display").innerHTML;
            var copyauthor=document.getElementById("author").innerHTML;
            var finaltext=copytext.concat(" by "+copyauthor);
            navigator.clipboard.writeText(finaltext).then(()=>{
                console.log("text is copied");
            }).catch(()=>{
                console.log("error");
            })
        }
        $(document).ready(function(){
            $("[data-toggle='tooltip']").tooltip();
            $("#copy").click(function(){
                $("#modalbox").modal("show");
            })
        })