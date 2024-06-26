# NewsApp
Study project that will display news on a specific topic upon request.
Used MaterializeCss 1.0.0
1. In CustomHttpModule.js created the http module which used post and get requests and (try catch) construction.
get request has arguments: url and callback.
2. In InitHttpModule.js created constanta http which takes the CustomHttp function.
Created constanta which names ''newsService'' which takes anonimous function which have unic apiKey variable and apiUrl variable takes url of webpage where will it reciver news.
return:
(topHeadlines and everithing) constructions from NewsApi.org where we used the http/customHttp() with GET, where construct the URL and just argument ''callback'' which we see used later.
3. In index.js we have a many constantas of form, form elements, buttons or containers but  we need the ''loadNews()'' function and "document.DOMContentLoaded".
LoadNews function first of all loaded preloader function, after create constants which takes countrySelect value (country) and searchInput value (searchText).
if searchText is empty (default when DOMloaded) - we used "NewsService".topHeadlines and give them arguments: country, function OnGetResponse which has renderNews function.
When topHeadlines - rendered top news per country.
When everything - rendered news which we search of theme from input.