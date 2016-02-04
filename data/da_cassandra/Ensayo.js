import { runQuery, runQueryOneResult, runQueryNoResult, Uuid } from './_client.js';

import Ensayo from '../model/Ensayo'


// Data access functions

export function DA_Ensayo_add( fields )
{
  const id = Uuid.random( );
  let cqlText = 'INSERT INTO "Ensayo" (id, "Ensayo_User_id", "Ensayo_Title", "Ensayo_Keywords", "Ensayo_Content" ) VALUES (?, ?, ?, ?, ?);';
  let cqlParams = [
    id,
    fields.Ensayo_User_id,
    fields.Ensayo_Title,
    fields.Ensayo_Keywords,
    fields.Ensayo_Content,
  ];
  return runQueryNoResult( cqlText, cqlParams )
  .then( ( ) => {
    return id;
  } )
  ;
}

export function DA_Ensayo_update( id, fields )
{
  // We will not update Ensayo_User_id since it makes no sense to update it
  let cqlText = 'UPDATE "Ensayo" SET ';
  let cqlParams = [ ];

  let followingItem = false;

  if( 'Ensayo_Title' in fields )
  {
    if( followingItem ) cqlText += ', ';
    cqlText += '"Ensayo_Title" = ?';
    cqlParams.push( fields.Ensayo_Title );
    followingItem = true;
  }
  if( 'Ensayo_Keywords' in fields )
  {
    if( followingItem ) cqlText += ', ';
    cqlText += '"Ensayo_Keywords" = ?';
    cqlParams.push( fields.Ensayo_Keywords );
    followingItem = true;
  }
  if( 'Ensayo_Content' in fields )
  {
    if( followingItem ) cqlText += ', ';
    cqlText += '"Ensayo_Content" = ?';
    cqlParams.push( fields.Ensayo_Content );
    followingItem = true;
  }

  cqlText += ' WHERE id = ?;';
  cqlParams.push( id );

  return runQueryNoResult( cqlText, cqlParams );
}

export function DA_Ensayo_get( id )
{
  const cqlText = 'SELECT * FROM "Ensayo" WHERE id = ?;';
  const cqlParams = [ id ];

  return runQueryOneResult( Ensayo, cqlText, cqlParams );
}

export function DA_Ensayo_delete( User_id, id )
{
  const cqlText = 'DELETE FROM "Ensayo" WHERE id = ?;';
  const cqlParams = [ id ];

  return runQueryOneResult( Ensayo, cqlText, cqlParams );
}

export function DA_Ensayo_list_get( User_id )
{
  let cqlText = 'SELECT * FROM "Ensayo" WHERE "Ensayo_User_id" = ?;';
  let cqlParams = [ User_id ];

  return runQuery( Ensayo, cqlText, cqlParams );
}