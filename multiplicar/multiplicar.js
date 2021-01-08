const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i}= ${base*i} \n`;
        }

        fs.writeFile(`./tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) throw reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }

        data += `Tabla del ${base}\n`;
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i}= ${base*i} \n`;
        }

        resolve(data);
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}