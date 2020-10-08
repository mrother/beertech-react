import ISource from './interfaces/ISource';

class CustomPlayer {

  private videoElement: HTMLVideoElement;

  public constructor(private width: number, private height: number, private message: string) {
    this.width = width;
    this.height = height;
    this.message = message;

    this.videoElement = document.createElement("video");
    this.videoElement.setAttribute("width", this.width.toString());
    this.videoElement.setAttribute("height", this.height.toString());
    this.videoElement.innerHTML = this.message;
  }

  setSources(sources: ISource[]) {
    sources && sources.map(source => {
      const sourceElement = document.createElement("source");
      sourceElement.setAttribute("src", source.src)
      sourceElement.setAttribute("type", source.type)
      this.videoElement.appendChild(sourceElement)
    })
  }

  render(containerHTML: string) {
    try {
      const outputElement = document.createElement("section");
      outputElement.setAttribute("id", containerHTML)
      outputElement.appendChild(this.videoElement);
      document.body.appendChild(outputElement);
    } catch (error) {
      throw (`Error creating component: ${error}`);
    }
  }
}

export default CustomPlayer;