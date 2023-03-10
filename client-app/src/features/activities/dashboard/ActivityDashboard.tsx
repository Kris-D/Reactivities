import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";
interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: ( id:string)=> void;
  cancelSelectedActivty: ()=> void;
  editMode: boolean;
  openForm: (id:string)=> void;
  closeForm: ()=> void;
  createOrEdit: (activity: Activity)=> void;
  deleteActivity: (id:string)=> void;
  submitting: boolean;
}

export default function ActivityDashboard({ activities, selectedActivity,  selectActivity, cancelSelectedActivty,editMode,openForm,closeForm,createOrEdit, deleteActivity,submitting }: Props) {
  return (
    <Grid>
      <GridColumn width="10">
        <ActivityList activities={activities} selectActivity ={selectActivity} deleteActivity={deleteActivity} submitting={submitting} /> 
      </GridColumn>
      <GridColumn width="6">
        {selectedActivity && !editMode && <ActivityDetails
         activity={selectedActivity} 
         cancelSelectedActivty={cancelSelectedActivty}
         openForm = {openForm}
          />}
       {editMode && < ActivityForm   closeForm={ closeForm}  activity={selectedActivity}  createOrEdit={createOrEdit} submitting={submitting} />}
      </GridColumn>
    </Grid>
  );
}
  