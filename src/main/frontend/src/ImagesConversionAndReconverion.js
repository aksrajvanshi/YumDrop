import React from "react";


const image2base64 = require('image-to-base64');
image2base64("path/to/file.jpg")
    .then(
        (response) => {
            console.log(response);
        }
    )
    .catch(
        (error) => {
            console.log(error);
        }
    )

class ImagesConversionAndReconverion extends React.Component{
    constructor(props) {
        super(props);
        this.state = { pictures: [],selectedFile: null };
        this.onDrop = this.onDrop.bind(this);

    }
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        console.log(this.state.pictures)
        let StringName = "";
        for (let i=0;i<this.state.pictures.length;i++){
            console.log(this.state.pictures[i])
            StringName = this.state.pictures[i].json().toString();
        }
        let nameOfFile="";
        let flag = 0;
        console.log(StringName)
        console.log(StringName.length)
        for(let i=0;i<StringName.length;i++){
            console.log("Inside")
            console.log(StringName[i])
            if (StringName[i] === '\"' && flag === 0){
                console.log("Set the flag")
                flag=1
            }else if (flag===1 && StringName[i]!=='\"'){
                nameOfFile=nameOfFile+StringName[i];
            }else if (flag===1 && StringName[i]==='\"'){
                flag=2
            }
        }
        console.log(nameOfFile)
        console.log(this.state.pictures.File)
        this.getDataUri(this.state.pictures)
    }

    getDataUri(url, callback) {
        let image = new Image();

        image.onload = function () {
            let canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth;
            canvas.height = this.naturalHeight;

            canvas.getContext('2d').drawImage(this, 0, 0);

            callback(canvas.toDataURL(url));
            this.setState({
                restaurantDishImage:  callback(canvas.toDataURL(url))
            })
            console.log(this.state.restaurantDishImage)
        };

        image.src = this.state.pictures.name;
        console.log(image.src);
        console.log(url)
        let canvas = document.createElement('canvas');
        console.log(canvas.toDataURL("./addHongKong.jpg"));
    }
    fileChangedHandler = (event) => {
        this.setState({ selectedFile: event.target.files[0] })
    }
    uploadHandler = () => {
        const formData = new FormData()
        formData.append(
            'myFile',
            this.state.selectedFile,
            this.state.selectedFile.name
        )
        console.log(  this.state.selectedFile.name)
        let promise = [];
        promise = image2base64(this.state.selectedFile.name)
        console.log(promise)
        console.log(promise[0])

        let canvas = document.createElement('canvas');

    }
    render() {
        return(
            <div>
                <input type="file" onChange={this.fileChangedHandler}/>

                    <button onClick={this.uploadHandler}>Upload!</button>
            </div>
        )
    }
}
export default ImagesConversionAndReconverion;