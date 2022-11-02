#!/bin/bash

# This script is used for clearing deletable folders in this project.

# Variables.
BUILD_FOLDER="./build"
COVERAGE_FOLDER="./coverage"

# Define function
function clear_folders {
	rm -r $BUILD_FOLDER
	rm -r $COVERAGE_FOLDER
	echo "Folders removed"
}

# Call function
clear_folders