export class Articulo {
    private titulo: string;
    private pecio: number;
    private autor: string;

    //constructor
    public constructor(titulo:string, precio:number, autor: string) {
        this.titulo = titulo;
        this.pecio = precio;
        if(autor != undefined) {
            this.autor = autor;
        }
    }

    //get/set
    public getTitulo(): string {
        return this.titulo;
    }
    public setTitulo(titulo: string): void  {
        this.titulo =  titulo;
    }
    ///con los demas atributos!!!
}

export class Buscador {

    private claveBusqueda: string;
    private cantidad: number;
    private articulos: Articulo[];//defino un array
    private cantidadResultados: number;

    //constructor
    public constructor(clave: string) {
        this.claveBusqueda = clave;
    }

    public buscar(): void {
        console.log('select * from algo');
        //creacion de los articulos
        
        let articulo1 = new Articulo('TONY STAR IRON MAN 01: UN...',830, 'SCOT DAN');
        let articulo2 = new Articulo('TONY STAR IRON MAN 02: UN...',840, 'SCOT DAN');
        let articulo3 = new Articulo('TONY STAR IRON MAN 03: UN...',850, 'SCOT DAN');
        let articulo4 = new Articulo('TONY STAR IRON MAN 04: UN...',860, 'SCOT DAN');
        let articulo5 = new Articulo('TONY STAR IRON MAN 05: UN...',870, 'SCOT DAN');
        let articulo6 = new Articulo('TONY STAR IRON MAN 06: UN...',880, 'SCOT DAN');

        this.articulos.push(articulo1);
        this.articulos.push(articulo2);
        this.articulos.push(articulo3);
        this.articulos.push(articulo4);
        this.articulos.push(articulo5);
        this.articulos.push(articulo6);

        this.cantidad = this.articulos.length;
    }

    public informar(): void {
        console.log(`clave:${this.claveBusqueda}`);        
    }
}

//crear el buscador
let miBuscador = new Buscador('iron man');

//ejecutar el metodo buscar el objeto miBuscador
miBuscador.buscar();

miBuscador.informar();
