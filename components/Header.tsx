import React from 'react';
import Image from 'next/legacy/image';
import {
	HomeIcon,
	ChevronDownIcon,
	MenuIcon,
	SearchIcon,
} from '@heroicons/react/solid';
import {
	BellIcon,
	ChatIcon,
	GlobeIcon,
	PlusIcon,
	SparklesIcon,
	SpeakerphoneIcon,
	VideoCameraIcon,
} from '@heroicons/react/outline';

function Header() {
	return (
		<div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
			<div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
				<Image
					src={'https://links.papareact.com/fqy'}
					alt=""
					layout="fill"
					objectFit="contain"
				/>
			</div>
			<div className="mx-7 flex items-center xl:min-w-[300px]">
				<HomeIcon className="h-5 w-5" />
				<p className="hidden flex-1 ml-2  lg:inline">Home</p>
				<ChevronDownIcon className="h-5 w-5" />
			</div>
			{/* search */}
			<form className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
				<SearchIcon className="h-6 w-6 text-gray-400" />
				<input
					className="flex-1 bg-transparent outline-none"
					type="text"
					placeholder="Search Reddit"
				/>
				<button type="submit" hidden />
			</form>
			<div className="flex">
				<SparklesIcon className="icon" />
				<GlobeIcon className="icon" />
				<VideoCameraIcon className="icon" />
				<hr className="h-10 border-gray-100" />
				<ChatIcon className="icon" />
				<BellIcon className="icon" />
				<PlusIcon className="icon" />
				<SpeakerphoneIcon className="icon" />
			</div>
		</div>
	);
}

export default Header;
