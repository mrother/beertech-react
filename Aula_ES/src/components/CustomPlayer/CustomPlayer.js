class CustomPlayer {

    constructor(width, height, message) {
        this.width = width;
        this.height = height;
        this.message = message;

        this.videoElement = document.createElement("video");
        this.videoElement.setAttribute("width", this.width)
        this.videoElement.setAttribute("height", this.height)
        this.videoElement.controls = true;

        this.videoElement.innerHTML = this.message;
    }

    setSources(sources) {
        sources.map(source => {
            const element = document.createElement("source");
            element.setAttribute("src", source.src)
            element.setAttribute("type", source.type)
            this.videoElement.appendChild(element)
        })
    }

    render(containerHTML) {
        try {
            const outputContainer = document.getElementById(containerHTML);

            if (!outputContainer) {
                const outputElement = document.createElement("section");
                outputElement.setAttribute("id", containerHTML)
                outputElement.appendChild(this.videoElement);
                document.body.appendChild(outputElement);
            } else {
                containerHTML.appendChild(this.videoElement);
            }
        } catch (error) {
            throw (`Não foi possível renderizar o Player. Erro: ${error}`);
        }
    }
}

export default CustomPlayer;