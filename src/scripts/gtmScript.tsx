const GTMScript: React.FC = () => {
  if (process.env.NODE_ENV === 'production') {
    const exportScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`;

    return <script async dangerouslySetInnerHTML={{ __html: exportScript }} />;
  } else {
    return null;
  }
};

export default GTMScript;
