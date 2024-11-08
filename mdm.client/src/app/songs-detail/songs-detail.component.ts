import { Component, OnInit } from '@angular/core';


interface ISongDetail {
  songId: number;
  name: string;
  artist: string;
  album: string;
}

@Component({
  selector: 'app-songs-detail',
  templateUrl: './songs-detail.component.html',
  styleUrl: './songs-detail.component.css'
})
export class SongsDetailComponent implements OnInit {
  pageTitle = 'Songs Detail';
  public song: ISongDetail | undefined;
  
  ngOnInit() {   
    this.getSong();
  }
 
  getSong(): void {
    
  }
  onBack(): void {

  }
}
