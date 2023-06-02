(
    function(){
        const listElements=document.querySelectorAll('.menu_item--show');/*obtiene todos los elementos, menu desplegable*/
        const list=document.querySelector('.menu_links'); /*obtiene un elemento , menu links*/
        const menu=document.querySelector('.menu_hamburguer');/*obtiene un elemento, menu hamburguer*/
  
        const addClick=()=>{
            listElements.forEach(element =>{
                element.addEventListener('click', ()=>{
                    let submenu=element.children[1];/*obtiene el elemento hijo posicion 1, que es menu_nesting*/
                    let height=0;
                    element.classList.toggle('menu_item_--active'); /*anula el evento de un menu*/
  
                    if(submenu.clientHeight===0){/*clientHeight, obtiene la altura, si la altura submenu es cero en la condicional*/
                        height=submenu.scrollHeight;/*varable , tenga la altura minima , para que exista*/
                    }
  
                    submenu.style.height=`${height}px`; /*se agrega la altura obtenida*/
                })
            })
        }
  
        const deleteStyleHeight=()=>{
            listElements.forEach(element=>{
                if(element.children[1].getAtribute('style')){
                    element.children[1].removeAtribute('style');/*si tiene el atributo style , que lo elimine*/
                    element.classList.remove('menu_item--active');
                }
            })
        }
       /* addClick();*/
  
        window.addEventListener('resize', ()=>{ /*si el ancho de la ventana supera los 800px*/
            if(window.innerWidth > 800){
                deleteStyleHeight();
                if(list.contains('menu_links--show')){ /* si contiene es clase , que la remueva*/
                    list.classList.remove('menu_links--show');
                }
            }
            else{
                addClick();
            }
        });
  
        if(window.innerWidth <= 800){ /*para evitar errores al hacer mas grande*/
            addClick();
        }
  
        menu.addEventListener('click',()=> list.classList.toggle('menu_links--show')); /*quita la clase menu liks show*/
    }
  )();
  



