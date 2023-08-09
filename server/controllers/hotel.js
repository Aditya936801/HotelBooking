import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res) => {
  try {
    const { hotelName, location } = req.body;
    const preHotel = await Hotel.findOne({
      $and: [
        {
          hotelName,
        },
        {
          location,
        },
      ],
    });
    if (preHotel) {
      res.status(400).json({ message: "Hotel Already exist" });
    }
    const hotel = new Hotel(req.body);
    const savedHotel = await hotel.save();
    res.status(201).json(savedHotel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateHotel = async (req, res) => {
  try {
    const { _id, hotelName, location, image, maxPerson, price, description } =
      req.body;
    const preHotel = await Hotel.findOne({
      $and: [
        {
          _id: { $ne: _id },
        },
        {
          hotelName,
        },
        {
          location,
        },
      ],
    });
    if (preHotel) {
      res.status(400).json({ message: "Hotel already exist" });
    }
    else{

      const update = {
        hotelName,
        location,
        price,
        maxPerson,
        description,
        image,
      };
      const updated = await Hotel.findOneAndUpdate({ _id: _id }, update, {
        new: true,
      });
      await updated.save();
      res.status(200).json(updated);
    }
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteHotel = async (req, res) => {
  const { _id } = req.body;
  try {
    const updated = await Hotel.findOneAndUpdate(
      { _id: _id },
      { status: "inactive" },
      {
        new: true,
      }
    );
    await updated.save();

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: "Cannot be Deleted" });
  }
};

export const getHotel = async (req, res) => {
  try {
    const hotels = await Hotel.find({
      status: "active",
    });
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getHotelByCity = async (req, res) => {
  try {
    const { location } = req.params;
    const re = new RegExp(location, "i");
    const hotels = await Hotel.find({
      $and: [
        {
          location: re,
        },
        {
          status: "active",
        },
      ],
    });
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
