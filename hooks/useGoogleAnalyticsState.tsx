

 function useGoogleAnalyticsState  () {

    const bind: object = {
        GoogleAnalyticSetUp() {
            const script = document.createElement("script");
            script.src = "https://www.googletagmanager.com/gtag/js?id=GTM-P3FNWFG";
            script.async = true;
            document.body.appendChild(script);
        }
    }
    return [bind]
    
}

export default useGoogleAnalyticsState