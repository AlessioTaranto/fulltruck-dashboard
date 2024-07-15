import DateAdapter from '@date-io/date-fns';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BusinessIcon from '@mui/icons-material/Business';
import EventIcon from '@mui/icons-material/Event';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SearchIcon from '@mui/icons-material/Search';
import TimelineIcon from '@mui/icons-material/Timeline';
import { DateRange, DateRangePicker, LocalizationProvider } from '@mui/lab';
import {
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    InputAdornment,
    MenuItem,
    TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Statistics } from '../../types/statistics';

interface FilterDialogProps {
    open: boolean;
    onClose: () => void;
    data: Statistics;
    setFilteredData: React.Dispatch<React.SetStateAction<Statistics | null>>;
}

/**
 * Renders a dialog for filtering statistics data.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.open - Whether the dialog is open.
 * @param {Function} props.onClose - The function to call when the dialog is closed.
 * @param {Statistics} props.data - The statistics data to filter.
 * @param {Function} props.setFilteredData - The function to set the filtered data.
 * @return {JSX.Element} The filtered dialog component.
 */
const FilterDialog: React.FC<FilterDialogProps> = ({ open, onClose, data, setFilteredData }) => {
    const [dateRange, setDateRange] = useState<DateRange<Date>>([null, null]);
    const [timeTarget, setTimeTarget] = useState('created_at');
    const [aggregationType, setAggregationType] = useState('day');
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    useEffect(() => {
        let filteredData = { ...data };
        if (dateRange[0] && dateRange[1]) {
            filteredData.data_table = filteredData.data_table.filter(
                (item) =>
                    new Date(item.aggregate_date) >= dateRange[0]! &&
                    new Date(item.aggregate_date) <= dateRange[1]!
            );
        }
        setFilteredData(filteredData);
    }, [dateRange, timeTarget, aggregationType, data, setFilteredData]);

    const handleFilterChange = (filter: string) => {
        setSelectedFilters((prev) =>
            prev.includes(filter) ? prev.filter((item) => item !== filter) : [...prev, filter]
        );
    };

    const chipIcons: { [key: string]: React.ReactElement } = {
        Carrier: <LocalShippingIcon />,
        Client: <BusinessIcon />,
        Revenue: <AttachMoneyIcon />,
    };

    const handleApply = () => {
        // Perform filtering logic here
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Filters</DialogTitle>
            <DialogContent>
                <LocalizationProvider dateAdapter={DateAdapter}>
                    <DateRangePicker
                        startText="Start Date"
                        endText="End Date"
                        value={dateRange}
                        onChange={(newValue: DateRange<Date>) => setDateRange(newValue)}
                        renderInput={(startProps: any, endProps: any) => (
                            <>
                                <TextField
                                    {...startProps}
                                    fullWidth
                                    sx={{ mb: 2 }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EventIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField
                                    {...endProps}
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EventIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </>
                        )}
                    />
                </LocalizationProvider>
                <TextField
                    select
                    label="Time Target"
                    value={timeTarget}
                    onChange={(e) => setTimeTarget(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <TimelineIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ minWidth: 150, mt: 2 }}
                    fullWidth
                >
                    <MenuItem value="created_at">Created At</MenuItem>
                    <MenuItem value="pickup_date">Pickup Date</MenuItem>
                </TextField>
                <TextField
                    select
                    label="Aggregation Type"
                    value={aggregationType}
                    onChange={(e) => setAggregationType(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <TimelineIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ minWidth: 150, mt: 2 }}
                    fullWidth
                >
                    <MenuItem value="day">Day</MenuItem>
                    <MenuItem value="week">Week</MenuItem>
                    <MenuItem value="month">Month</MenuItem>
                </TextField>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {['Carrier', 'Client', 'Revenue'].map((filter) => (
                        <Chip
                            key={filter}
                            label={filter}
                            icon={chipIcons[filter]}
                            clickable
                            color={selectedFilters.includes(filter) ? 'primary' : 'default'}
                            onClick={() => handleFilterChange(filter)}
                        />
                    ))}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleApply} color="primary" startIcon={<SearchIcon />}>
                    Apply
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default FilterDialog;
