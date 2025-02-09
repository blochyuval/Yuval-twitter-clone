import Notification from '../models/notification.model.js'


export const getNotifications = async(req, res) => {
  try {
    const userId = req.user._id;

    const notifications = await Notification.find({to: userId}).populate({
     path: 'from',
     select: 'username profileImg'
    });

    await Notification.updateMany({to:userId}, {read:true});

    res.status(200).json(notifications);


  } catch (error) {
    console.log('Error in getNotification controller', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const deleteNotifications = async(req,res) => {

  try {
    const userId = req.user._id;

    await Notification.deleteMany({to:userId});

    res.status(200).json({ message: 'Notifications deleted' });
    
  } catch (error) {
    console.log('Error in deleteNotifications function', error.message);
    return res.status(500).json({ error: 'Internal Server Error'});
  }

}


export const deleteOneNotification = async(req, res) => {
  const {id} = req.params;

  try {
    const userId = req.user._id;

    const notification = await Notification.findById(id);

    if(!notification) return res.status(404).json({ error: 'Notification Not Found' });
    if(notification.to.toString() !== userId.toString()) return res.status(403).json({ error: 'Unauthorized to delete this notification' });
    
    await Notification.findByIdAndDelete(id);

    return res.status(200).json({ message: 'Notification deleted successfully' });
  } catch (error) {
    console.log('Error in deleteOneNotification controller: ', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}