/* @flow weak */

import ObjectManagerBase from './lib/ObjectManagerBase';

import Ensayo from '../units/imrsk-example-ensayo/graphql/model/Ensayo';
import Translaticiarum from './model/Translaticiarum';

export default class ObjectManager extends ObjectManagerBase
{
  constructor( Viewer_User_id )
  {
    super( Viewer_User_id );

    this.registerEntity( 'Ensayo', Ensayo );
    this.registerEntity( 'Translaticiarum', Translaticiarum );
  }
}
