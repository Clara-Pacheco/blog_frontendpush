export function Post({subtitle,title,children, author, date}){
  
  return (
    <div className="post mx-2">
      <div className="img-post"></div>
      <h5>{subtitle}</h5>
      <h3>{title}</h3>
      <p className="mt-1"> 
        {children}
        </p>
        <div className="flex pt-3">
          <div className="img-profile"></div>
          <div className="description-profile mt-2 ml-2">
            <h6 className="color-blue">{author}</h6>
            <p>{ date }</p>
          </div>
        </div>
    </div>
  );
}

// Quando passamos o conteúdo dentro da tag de abertura e fechamento de chamada
// do componente, a propriedade que devemos acessar no objeto enviado no contrutor
// do componente é a propriedade 'children'.