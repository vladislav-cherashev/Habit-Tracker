import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component( {
  selector        : 'app-popup',
  templateUrl     : './popup.component.html',
  styleUrls       : [ './popup.component.css' ],
  changeDetection : ChangeDetectionStrategy.OnPush
} )
export class PopupComponent {

  public isVisible = false;

  public sport = '../../../assets/images/sport.svg';

  public water = '../../../assets/images/water.svg';

  public food = '../../../assets/images/food.svg';

  open() {
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  setIcon(){
    console.log('setIcon')
  }

  addHabit( $event : SubmitEvent ){
    console.log('addHabit')
  }

  onTogglePopup(){
    console.log('onTogglePopup')
  }
}
