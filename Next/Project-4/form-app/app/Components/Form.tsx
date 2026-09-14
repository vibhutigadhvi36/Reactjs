"use client";

import {
  PhotoIcon,
  UserCircleIcon,
  PencilSquareIcon,
  TrashIcon,
  ArrowLongUpIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
  MapPinIcon,
  EnvelopeIcon,
  LockClosedIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

import { useEffect, useState } from "react";

interface UserData {
  id: number;
  username: string;
  about: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  hobby: string[];
  country: string;
  streetAddress: string;
  city: string;
  state: string;
  pinCode: string;
}

export default function Form() {
// Form State 

  const [username, setUsername] = useState("");
  const [about, setAbout] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState<string[]>([]);
  const [country, setCountry] = useState("");
  const [streetAddress, setStreetaddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPincode] = useState("");

  // CRUD.. 

  const [users, setUsers] = useState<UserData[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<keyof UserData>("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const filteredUsers = users.filter((u) => {
    const searchValue = search.toLowerCase();

    return (
      u.username.toLowerCase().includes(searchValue) ||
      u.firstName.toLowerCase().includes(searchValue) ||
      u.lastName.toLowerCase().includes(searchValue) ||
      u.email.toLowerCase().includes(searchValue) ||
      u.gender.toLowerCase().includes(searchValue) ||
      u.country.toLowerCase().includes(searchValue) ||
      u.city.toLowerCase().includes(searchValue) ||
      u.state.toLowerCase().includes(searchValue)
    );
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    let valueA = a[sortField];
    let valueB = b[sortField];

    if (Array.isArray(valueA)) {
      valueA = valueA.join("");
    }

    if (Array.isArray(valueB)) {
      valueB = valueB.join("");
    }

    if (typeof valueA === "string" && typeof valueB === "string") {
      const result = valueA.localeCompare(
        valueB,
        undefined,
        {
          sensitivity: "base",
        }
      );

      return sortOrder === "asc" ? result : -result;
    }

    if (typeof valueA === "number" && typeof valueB === "number") {
      return sortOrder === "asc"
        ? valueA - valueB
        : valueB - valueA;
    }

    return 0;
  });

  const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

  const startIndex = (currentPage - 1) * usersPerPage;

  const paginatedUsers = sortedUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  const handleSort = (field: keyof UserData) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }

    setCurrentPage(1);
  };

  useEffect(() => {
    const savedUserData = localStorage.getItem("Users");

    if (savedUserData) {
      setUsers(JSON.parse(savedUserData));
    }
  }, []);

  const handleHobby = (value: string) => {
    if (hobby.includes(value)) {
      setHobby(hobby.filter((h) => h !== value));
    } else {
      setHobby([...hobby, value]);
    }
  };

  const validate = () => {
    const newErrors: {
      username?: string;
      about?: string;
      firstName?: string;
      lastName?: string;
      email?: string;
      password?: string;
      gender?: string;
      hobby?: string;
      country?: string;
      streetAddress?: string;
      city?: string;
      state?: string;
      pinCode?: string;
    } = {};

    if (!username.trim()) {
      newErrors.username = "Username is Required...!";
    } else if (username.length < 3) {
      newErrors.username =
        "Username must be at least 3 Characters...!";
    } else if (username.length > 20) {
      newErrors.username =
        "Username must not exceed 20 Characters...!";
    } else if (!/^[A-Za-z0-9_]+$/.test(username)) {
      newErrors.username =
        "Username Can contain only characters, number and underscore ...!";
    }

    if (!about.trim()) {
      newErrors.about = "About is Required...!";
    } else if (about.trim().length < 30) {
      newErrors.about =
        "About must be at least 30 Characters...!";
    } else if (about.trim().length > 200) {
      newErrors.about =
        "About must not exceed 200 Characters...!";
    }

    if (!firstName.trim()) {
      newErrors.firstName = "First Name is Required...!";
    } else if (!/^[A-Za-z ]+$/.test(firstName)) {
      newErrors.firstName =
        "First Name Can contain only characters...!";
    } else if (firstName.trim().length < 2) {
      newErrors.firstName =
        "First Name must be at least 2 Characters...!";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last Name is Required...!";
    } else if (!/^[A-Za-z ]+$/.test(lastName)) {
      newErrors.lastName =
        "Last Name Can contain only characters...!";
    } else if (lastName.trim().length < 2) {
      newErrors.lastName =
        "Last Name must be at least 2 Characters...!";
    }

    if (!email.trim()) {
      newErrors.email = "Email is Required...!";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        email
      )
    ) {
      newErrors.email = "Please Enter Valid Email ID...!";
    }

    if (!password.trim()) {
      newErrors.password = "Password is Required...!";
    } else if (password.trim().length < 8) {
      newErrors.password =
        "Password must be at least 8 Characters...!";
    } else if (password.trim().length > 16) {
      newErrors.password =
        "Password must not exceed 16 Characters...!";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password =
        "Password must Contain at Least one Uppercase Letter...!";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password =
        "Password must Contain at Least one Lowercase Letter...!";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password =
        "Password must Contain at Least one number...!";
    } else if (!/[!@#$%^&*_.-]/.test(password)) {
      newErrors.password =
        "Password must Contain at Least one Special Character...!";
    }

    if (!gender.trim()) {
      newErrors.gender = "Please Select Gender...!";
    }

    if (hobby.length === 0) {
      newErrors.hobby =
        "Please Select at least one Hobby...!";
    }

    if (!country) {
      newErrors.country =
        "Please Select a Country...!";
    }

    if (!streetAddress.trim()) {
      newErrors.streetAddress =
        "Street address is Required...!";
    } else if (streetAddress.trim().length < 5) {
      newErrors.streetAddress =
        "Street address must be at least 5 Characters...!";
    }

    if (!city.trim()) {
      newErrors.city = "City is Required...!";
    } else if (!/^[A-Za-z ]+$/.test(city)) {
      newErrors.city =
        "City only Contain Characters and Space...!";
    }

    if (!state.trim()) {
      newErrors.state = "State is Required...!";
    } else if (!/^[A-Za-z ]+$/.test(state)) {
      newErrors.state =
        "State only Contain Characters and Space...!";
    }

    if (!pinCode.trim()) {
      newErrors.pinCode = "Pincode is Required...!";
    } else if (!/^\d{6}$/.test(pinCode)) {
      newErrors.pinCode =
        "Pincode must contain exactly 6 Numbers...!";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleEdit = (user: UserData) => {
    setEditId(user.id);

    setUsername(user.username);
    setAbout(user.about);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setPassword(user.password);
    setGender(user.gender);
    setHobby(user.hobby ?? []);

    setStreetaddress(user.streetAddress);
    setCity(user.city);
    setState(user.state);
    setCountry(user.country);
    setPincode(user.pinCode);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm(
      "Are You sure you want to delete this Record..?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedUsers = users.filter(
      (user) => user.id !== id
    );

    setUsers(updatedUsers);

    localStorage.setItem(
      "Users",
      JSON.stringify(updatedUsers)
    );

    if (
      currentPage > 1 &&
      paginatedUsers.length === 1
    ) {
      setCurrentPage(currentPage - 1);
    }

    console.log("User Deleted");
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) {
      return;
    }

    if (editId === null) {
      // ADD USER

      const newUser: UserData = {
        id: Date.now(),
        username,
        about,
        firstName,
        lastName,
        email,
        password,
        gender,
        hobby,
        country,
        state,
        streetAddress,
        city,
        pinCode,
      };

      const updatedUsers = [
        ...users,
        newUser,
      ];

      setUsers(updatedUsers);

      localStorage.setItem(
        "Users",
        JSON.stringify(updatedUsers)
      );

      console.log("User Added");
    } else {
      // UPDATE USER

      const updatedUsers = users.map((user) => {
        if (user.id === editId) {
          return {
            ...user,
            username,
            about,
            firstName,
            lastName,
            email,
            password,
            gender,
            hobby,
            country,
            state,
            streetAddress,
            city,
            pinCode,
          };
        }

        return user;
      });

      setUsers(updatedUsers);

      localStorage.setItem(
        "Users",
        JSON.stringify(updatedUsers)
      );

      console.log("User Updated");
    }

    resetForm();
  };

  const resetForm = () => {
    setUsername("");
    setAbout("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setGender("");
    setHobby([]);
    setStreetaddress("");
    setCity("");
    setState("");
    setCountry("");
    setPincode("");

    setErrors({});
    setEditId(null);
  };

  const errorMessage = (field: string) => {
    if (!errors[field]) return null;

    return (
      <p className="mt-1.5 text-xs font-medium text-red-600">
        {errors[field]}
      </p>
    );
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">

      {/* Page Header.. */}

      <div className="mx-auto max-w-7xl">

        <div className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-violet-700 to-purple-700 px-6 py-8 text-white shadow-xl sm:px-10">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <div className="mb-2 flex items-center gap-2">
                <div className="rounded-xl bg-white/15 p-2">
                  <UserPlusIcon className="h-6 w-6" />
                </div>

                <span className="text-sm font-medium text-indigo-100">
                  User Management
                </span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Create User Profile
              </h1>

              <p className="mt-2 max-w-2xl text-sm text-indigo-100 sm:text-base">
                Add and manage user information using this
                simple CRUD form.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wider text-indigo-200">
                Total Users
              </p>

              <p className="mt-1 text-3xl font-bold">
                {users.length}
              </p>
            </div>

          </div>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200">

            <section className="border-b border-slate-200 p-6 sm:p-8">

              <div className="mb-7 flex items-start gap-4">

                <div className="rounded-2xl bg-indigo-50 p-3">
                  <UserCircleIcon className="h-7 w-7 text-indigo-600" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Profile Details
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Basic information that will be displayed
                    on the user profile.
                  </p>
                </div>

              </div>


              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

                {/* USERNAME */}

                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Username
                  </label>

                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) =>
                      setUsername(e.target.value)
                    }
                    placeholder="e.g. john_smith"
                    className={`block w-full rounded-xl border ${
                      errors.username
                        ? "border-red-400"
                        : "border-slate-300"
                    } bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100`}
                  />

                  {errorMessage("username")}
                </div>


                {/* ABOUT */}

                <div>
                  <label
                    htmlFor="about"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    About
                  </label>

                  <textarea
                    id="about"
                    name="about"
                    rows={4}
                    value={about}
                    onChange={(e) =>
                      setAbout(e.target.value)
                    }
                    placeholder="Write a few sentences about yourself..."
                    className={`block w-full resize-none rounded-xl border ${
                      errors.about
                        ? "border-red-400"
                        : "border-slate-300"
                    } bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100`}
                  />

                  <div className="mt-1 flex justify-between">
                    {errorMessage("about")}

                    <span className="ml-auto text-xs text-slate-400">
                      {about.length}/200
                    </span>
                  </div>
                </div>

                {/* PROFILE PHOTO */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Profile Photo
                  </label>

                  <div className="flex items-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4">

                    <UserCircleIcon className="h-16 w-16 text-slate-300" />

                    <div>
                      <button
                        type="button"
                        className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-300 transition hover:bg-indigo-50 hover:text-indigo-700"
                      >
                        Change Photo
                      </button>

                      <p className="mt-1 text-xs text-slate-400">
                        JPG, PNG or GIF
                      </p>
                    </div>

                  </div>
                </div>

                {/* COVER PHOTO */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Cover Photo
                  </label>

                  <div className="flex h-28 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 transition hover:border-indigo-400 hover:bg-indigo-50">

                    <div className="text-center">

                      <PhotoIcon className="mx-auto h-8 w-8 text-slate-300" />

                      <label
                        htmlFor="file-upload"
                        className="mt-1 block cursor-pointer text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                      >
                        Upload a file

                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>

                      <p className="text-xs text-slate-400">
                        or drag and drop
                      </p>

                    </div>

                  </div>
                </div>

              </div>
            </section>


            {/* Personal Info */}

            <section className="border-b border-slate-200 p-6 sm:p-8">

              <div className="mb-7 flex items-start gap-4">

                <div className="rounded-2xl bg-violet-50 p-3">
                  <EnvelopeIcon className="h-7 w-7 text-violet-600" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Personal Information
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Enter the user's personal and contact
                    information.
                  </p>
                </div>

              </div>


              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">


                {/* FIRST NAME */}

                <div>
                  <label
                    htmlFor="first-name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    First Name
                  </label>

                  <input
                    id="first-name"
                    type="text"
                    value={firstName}
                    onChange={(e) =>
                      setFirstName(e.target.value)
                    }
                    placeholder="John"
                    className={`w-full rounded-xl border ${
                      errors.firstName
                        ? "border-red-400"
                        : "border-slate-300"
                    } bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100`}
                  />

                  {errorMessage("firstName")}
                </div>


                {/* LAST NAME */}

                <div>
                  <label
                    htmlFor="last-name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Last Name
                  </label>

                  <input
                    id="last-name"
                    type="text"
                    value={lastName}
                    onChange={(e) =>
                      setLastName(e.target.value)
                    }
                    placeholder="Smith"
                    className={`w-full rounded-xl border ${
                      errors.lastName
                        ? "border-red-400"
                        : "border-slate-300"
                    } bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100`}
                  />

                  {errorMessage("lastName")}
                </div>


                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>

                  <div className="relative">

                    <EnvelopeIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      placeholder="john@example.com"
                      className={`w-full rounded-xl border ${
                        errors.email
                          ? "border-red-400"
                          : "border-slate-300"
                      } bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100`}
                    />

                  </div>

                  {errorMessage("email")}
                </div>


                {/* PASSWORD */}

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <div className="relative">

                    <LockClosedIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                      placeholder="Enter secure password"
                      className={`w-full rounded-xl border ${
                        errors.password
                          ? "border-red-400"
                          : "border-slate-300"
                      } bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100`}
                    />

                  </div>

                  {errorMessage("password")}
                </div>


                {/* GENDER */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Gender
                  </label>

                  <div className="flex gap-3">

                    <label
                      className={`flex flex-1 cursor-pointer items-center gap-3 rounded-xl border p-3 transition ${
                        gender === "Male"
                          ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                          : "border-slate-300 bg-slate-50 text-slate-600 hover:border-indigo-300"
                      }`}
                    >

                      <input
                        type="radio"
                        value="Male"
                        name="gender"
                        checked={gender === "Male"}
                        onChange={(e) =>
                          setGender(e.target.value)
                        }
                        className="h-4 w-4 accent-indigo-600"
                      />

                      <span className="text-sm font-medium">
                        Male
                      </span>

                    </label>


                    <label
                      className={`flex flex-1 cursor-pointer items-center gap-3 rounded-xl border p-3 transition ${
                        gender === "Female"
                          ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                          : "border-slate-300 bg-slate-50 text-slate-600 hover:border-indigo-300"
                      }`}
                    >

                      <input
                        type="radio"
                        value="Female"
                        name="gender"
                        checked={gender === "Female"}
                        onChange={(e) =>
                          setGender(e.target.value)
                        }
                        className="h-4 w-4 accent-indigo-600"
                      />

                      <span className="text-sm font-medium">
                        Female
                      </span>

                    </label>

                  </div>

                  {errorMessage("gender")}
                </div>


                {/* HOBBY */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Hobbies
                  </label>

                  <div className="grid grid-cols-2 gap-2">

                    {[
                      "Reading",
                      "Writing",
                      "Surfing",
                      "Travelling",
                      "Music",
                    ].map((item) => (

                      <label
                        key={item}
                        className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 transition ${
                          hobby.includes(item)
                            ? "border-violet-500 bg-violet-50 text-violet-700"
                            : "border-slate-300 bg-slate-50 text-slate-600 hover:border-violet-300"
                        }`}
                      >

                        <input
                          type="checkbox"
                          value={item}
                          checked={hobby.includes(item)}
                          onChange={(e) =>
                            handleHobby(e.target.value)
                          }
                          className="h-4 w-4 accent-violet-600"
                        />

                        <span className="text-sm font-medium">
                          {item}
                        </span>

                      </label>

                    ))}

                  </div>

                  {errorMessage("hobby")}
                </div>


                {/* COUNTRY */}

                <div>
                  <label
                    htmlFor="country"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Country
                  </label>

                  <div className="relative">

                    <select
                      id="country"
                      value={country}
                      onChange={(e) =>
                        setCountry(e.target.value)
                      }
                      className={`w-full appearance-none rounded-xl border ${
                        errors.country
                          ? "border-red-400"
                          : "border-slate-300"
                      } bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100`}
                    >

                      <option value="">
                        Select Country
                      </option>

                      <option value="India">
                        India
                      </option>

                      <option value="USA">
                        United States
                      </option>

                      <option value="Canada">
                        Canada
                      </option>

                      <option value="China">
                        China
                      </option>

                      <option value="Russia">
                        Russia
                      </option>

                      <option value="Mexico">
                        Mexico
                      </option>

                    </select>

                    <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  </div>

                  {errorMessage("country")}
                </div>


                {/* STREET ADDRESS */}

                <div>
                  <label
                    htmlFor="street-address"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Street Address
                  </label>

                  <input
                    id="street-address"
                    type="text"
                    value={streetAddress}
                    onChange={(e) =>
                      setStreetaddress(e.target.value)
                    }
                    placeholder="123 Main Street"
                    className={`w-full rounded-xl border ${
                      errors.streetAddress
                        ? "border-red-400"
                        : "border-slate-300"
                    } bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100`}
                  />

                  {errorMessage("streetAddress")}
                </div>


                {/* CITY */}

                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    City
                  </label>

                  <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) =>
                      setCity(e.target.value)
                    }
                    placeholder="Surat"
                    className={`w-full rounded-xl border ${
                      errors.city
                        ? "border-red-400"
                        : "border-slate-300"
                    } bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100`}
                  />

                  {errorMessage("city")}
                </div>


                {/* STATE */}

                <div>
                  <label
                    htmlFor="state"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    State / Province
                  </label>

                  <input
                    id="state"
                    type="text"
                    value={state}
                    onChange={(e) =>
                      setState(e.target.value)
                    }
                    placeholder="Gujarat"
                    className={`w-full rounded-xl border ${
                      errors.state
                        ? "border-red-400"
                        : "border-slate-300"
                    } bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100`}
                  />

                  {errorMessage("state")}
                </div>


                {/* PIN CODE */}

                <div>
                  <label
                    htmlFor="postal-code"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    ZIP / Postal Code
                  </label>

                  <input
                    id="postal-code"
                    type="text"
                    value={pinCode}
                    onChange={(e) =>
                      setPincode(e.target.value)
                    }
                    placeholder="395001"
                    maxLength={6}
                    className={`w-full rounded-xl border ${
                      errors.pinCode
                        ? "border-red-400"
                        : "border-slate-300"
                    } bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100`}
                  />

                  {errorMessage("pinCode")}
                </div>

              </div>
            </section>


            {/* =====================================
                FORM BUTTONS
            ===================================== */}

            <div className="flex flex-col-reverse gap-3 bg-slate-50 px-6 py-5 sm:flex-row sm:justify-end sm:px-8">

              <button
                type="reset"
                onClick={resetForm}
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Reset
              </button>

              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700 hover:shadow-lg"
              >
                {editId === null
                  ? "Add User"
                  : "Update User"}
              </button>

            </div>

          </div>

        </form>

        <section className="mt-8 mb-12">

          <div className="mb-5 flex items-center justify-between">

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Users
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                View, edit or delete user records.
              </p>
            </div>

            <div className="hidden rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700 sm:block">
              {users.length} Records
            </div>

          </div>


          <div className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200">

            <div className="overflow-x-auto">

              <table className="w-full min-w-[1200px] text-left text-sm">

                <thead className="bg-slate-900 text-xs uppercase tracking-wider text-slate-200">

                  <tr>

                    <th className="px-5 py-4">
                      Photo
                    </th>

                    <th
                      className="cursor-pointer px-5 py-4 transition hover:bg-slate-800"
                      onClick={() =>
                        handleSort("username")
                      }
                    >
                      <div className="flex items-center gap-2">
                        Username

                        {sortField === "username" && (
                          <span>
                            {sortOrder === "asc"
                              ? "↑"
                              : "↓"}
                          </span>
                        )}
                      </div>
                    </th>

                    <th
                      className="cursor-pointer px-5 py-4 transition hover:bg-slate-800"
                      onClick={() =>
                        handleSort("firstName")
                      }
                    >
                      <div className="flex items-center gap-2">
                        Name

                        {sortField === "firstName" && (
                          <span>
                            {sortOrder === "asc"
                              ? "↑"
                              : "↓"}
                          </span>
                        )}
                      </div>
                    </th>

                    <th className="px-5 py-4">
                      Email
                    </th>

                    <th className="px-5 py-4">
                      Password
                    </th>

                    <th className="px-5 py-4">
                      Gender
                    </th>

                    <th className="px-5 py-4">
                      Hobby
                    </th>

                    <th className="px-5 py-4">
                      Address
                    </th>

                    <th className="px-5 py-4">
                      State
                    </th>

                    <th className="px-5 py-4">
                      Country
                    </th>

                    <th className="px-5 py-4 text-center">
                      Action
                    </th>

                  </tr>

                </thead>


                <tbody className="divide-y divide-slate-200">

                  {paginatedUsers.length === 0 ? (

                    <tr>

                      <td
                        colSpan={11}
                        className="px-6 py-16 text-center"
                      >

                        <div className="mx-auto flex max-w-sm flex-col items-center">

                          <div className="rounded-full bg-slate-100 p-4">
                            <UserCircleIcon className="h-10 w-10 text-slate-300" />
                          </div>

                          <h3 className="mt-4 text-lg font-semibold text-slate-700">
                            No Users Found
                          </h3>

                          <p className="mt-1 text-sm text-slate-400">
                            Add a new user or change your
                            search query.
                          </p>

                        </div>

                      </td>

                    </tr>

                  ) : (

                    paginatedUsers.map((u) => (

                      <tr
                        key={u.id}
                        className="transition hover:bg-indigo-50/50"
                      >

                        {/* PHOTO */}

                        <td className="px-5 py-4">

                          <UserCircleIcon className="h-10 w-10 text-slate-300" />

                        </td>


                        {/* USERNAME */}

                        <td className="px-5 py-4">

                          <span className="font-semibold text-indigo-700">
                            @{u.username}
                          </span>

                        </td>


                        {/* NAME */}

                        <td className="px-5 py-4">

                          <div className="font-medium text-slate-800">
                            {u.firstName} {u.lastName}
                          </div>

                        </td>


                        {/* EMAIL */}

                        <td className="px-5 py-4 text-slate-600">
                          {u.email}
                        </td>


                        {/* PASSWORD */}

                        <td className="px-5 py-4">

                          <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium tracking-widest text-slate-500">
                            ••••••••
                          </span>

                        </td>

                        {/* GENDER */}

                        <td className="px-5 py-4">

                          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                            {u.gender}
                          </span>

                        </td>

                        {/* HOBBY */}

                        <td className="max-w-[180px] px-5 py-4 text-slate-600">
                          {u.hobby.join(", ")}
                        </td>

                        {/* ADDRESS */}

                        <td className="max-w-[220px] px-5 py-4 text-slate-600">

                          <div className="flex gap-1">

                            <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" />

                            <span>
                              {u.streetAddress},{" "}
                              {u.city},{" "}
                              {u.pinCode}
                            </span>

                          </div>

                        </td>

                        {/* STATE */}

                        <td className="px-5 py-4 text-slate-600">
                          {u.state}
                        </td>

                        {/* COUNTRY */}

                        <td className="px-5 py-4">

                          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                            {u.country}
                          </span>

                        </td>

                        {/* ACTION */}

                        <td className="px-5 py-4">

                          <div className="flex items-center justify-center gap-2">

                            <button
                              type="button"
                              onClick={() =>
                                handleEdit(u)
                              }
                              title="Edit User"
                              className="rounded-lg bg-amber-50 p-2 text-amber-600 transition hover:bg-amber-100"
                            >
                              <PencilSquareIcon className="h-5 w-5" />
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                handleDelete(u.id)
                              }
                              title="Delete User"
                              className="rounded-lg bg-red-50 p-2 text-red-600 transition hover:bg-red-100"
                            >
                              <TrashIcon className="h-5 w-5" />
                            </button>

                          </div>

                        </td>

                      </tr>

                    ))

                  )}

                </tbody>

              </table>

            </div>

                {/* Pagination.. */}

            <div className="flex flex-col gap-4 border-t border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-sm text-slate-500">

                Showing{" "}

                <span className="font-semibold text-slate-700">
                  {sortedUsers.length === 0
                    ? 0
                    : startIndex + 1}
                </span>

                {" "}to{" "}

                <span className="font-semibold text-slate-700">
                  {Math.min(
                    startIndex + usersPerPage,
                    sortedUsers.length
                  )}
                </span>

                {" "}of{" "}

                <span className="font-semibold text-slate-700">
                  {sortedUsers.length}
                </span>

                {" "}users

              </p>

              <div className="flex items-center justify-center gap-1">

                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((p) => p - 1)
                  }
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Previous
                </button>

                {Array.from(
                  {
                    length: totalPages,
                  },
                  (_, index) => index + 1
                ).map((p) => (

                  <button
                    type="button"
                    key={p}
                    onClick={() =>
                      setCurrentPage(p)
                    }
                    className={`min-w-9 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      currentPage === p
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "border border-slate-300 bg-white text-slate-700 hover:bg-indigo-50"
                    }`}
                  >
                    {p}
                  </button>

                ))}

                <button
                  type="button"
                  disabled={
                    currentPage === totalPages ||
                    totalPages === 0
                  }
                  onClick={() =>
                    setCurrentPage((p) => p + 1)
                  }
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                </button>

              </div>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}