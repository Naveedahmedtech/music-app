import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import type { SelectProps } from 'antd/es/select';

const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
    new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((_, idx) => {
            const category = `${query}${idx}`;
            return {
                value: category,
                label: (
                    <div>
                        <span className='dark-color'>
                            Found {query} on{' '}
                            <a
                                href={`https://s.taobao.com/search?q=${query}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='dark-color'
                            >
                                {category}
                            </a>
                        </span>
                        <span className="dark-color">{getRandomInt(200, 100)} results</span>
                    </div>
                ),
            };
        });

const SearchPlaylist = () => {
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);

    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value: string) => {
        console.log('onSelect', value);
    };

    return (
        <AutoComplete
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
        >
            <Input.Search size="medium" placeholder="Search..." enterButton
                className="custom-input"
            />
        </AutoComplete>
    );
};

export default SearchPlaylist;
